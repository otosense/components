import * as React from 'react';

import {
  makeStyles,
  TextField,
  TextFieldProps,
} from '@material-ui/core';

import { colors, inputStyles } from '../shared/styles';

interface ExtraProps {
  blurOnEnter?: boolean;
  button?: JSX.Element;
  errorText?: string;
  focused?: boolean;
  helpText?: string;
  invertColor?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  onChangeValue?: (value: string) => void;
  onEnterKey?: VoidFunction;
  password?: boolean;
  inputStyle?: any;
  transparent?: boolean;
}

const defaultProps: Partial<TextFieldProps> = {
  variant: 'filled',
};

const useStyles = makeStyles({
  ...inputStyles,
  buttonRow: {
    backgroundColor: colors.lightGray,
    display: 'flex',
    height: 45,
    '&.inverted': {
      backgroundColor: colors.white,
    },
    '&.transparent': {
      backgroundColor: 'inherit',
    },
    '&.focused': {
      backgroundColor: colors.white,
      boxShadow: `inset 0 0 0 1px ${colors.adiBlue}`,
    },
    '&:focus-within': {
      borderBottom: `1px solid ${colors.adiBlue}`,
    },
  },
});

export const StyledTextField = (props: TextFieldProps & ExtraProps) => {
  const {
    blurOnEnter,
    button,
    className,
    focused,
    invertColor,
    label,
    onEnterKey,
    password,
    transparent,
    id,
    onChange,
    style,
    inputStyle,
    ...textFieldProps
  } = props;
  const styles = useStyles();

  const elementId: any = id || (label as string).replace(/\s/g, '_');
  let inputRef: any = null;

  const makeRef = (ref: any) => {
    inputRef = ref;
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const value = event.target.value;
    if (props.onChangeValue) {
      props.onChangeValue(value);
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === 'Enter' && !textFieldProps.disabled) {
      onEnterKey();
      if (inputRef) {
        inputRef.blur();
      }
    }
  };

  const onBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    if (password && inputRef) {
      inputRef.getField().value = '*******';
    }
  };

  const defaultInputStyle = textFieldProps.variant === 'standard' ? {
    backgroundColor: 'white', height: 45,
  } : {};

  let buttonRowClassname: string = styles.buttonRow;
  if (invertColor) {
    buttonRowClassname += ' inverted';
  } else if (transparent) {
    buttonRowClassname += ' transparent';
  }
  if (focused) {
    buttonRowClassname += ' focused';
  }
  return (
    <div className={styles.root} style={style}>
      {!!label &&
       <label
         className={`${styles.label}${props.error ? ' ' + styles.errorLabel : ''}${className ? ' ' + className : ''}`}
       >{props.error && props.errorText ? `${label} (${props.errorText})` : label}
       </label>
      }
      <div className={buttonRowClassname}>
        <TextField
          onBlur={onBlur}
          onKeyDown={handleEnterKey}
          id={elementId}
          ref={blurOnEnter || onBlur ? makeRef : undefined}
          onChange={handleChange}
          variant={textFieldProps.variant || defaultProps.variant}
          style={{ ...defaultInputStyle, ...(inputStyle || {}) }}
          {...textFieldProps}
        />
        {button}
      </div>
    </div>
  );
};

export default StyledTextField;
