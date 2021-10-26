import * as React from 'react';

import {
  makeStyles,
  MenuItem,
  Select,
  SelectProps,
} from '@material-ui/core';

import { inputStyles } from '../shared/styles';

interface ExtraProps {
  inputStyle?: any;
  itemLabel?: string;
  itemValue?: string;
  menuItems?: string[] | object[];
  onChange?: never;
  onChangeValue?: (value: string) => void;
  transparent?: boolean;
}

const useStyles = makeStyles(inputStyles as any);

const defaultProps: Partial<SelectProps> = {
  variant: 'filled',
};

export default (props: SelectProps & ExtraProps) => {
  const {
    label,
    transparent,
    className,
    itemLabel,
    itemValue,
    menuItems,
    onChangeValue,
    children,
    style,
    inputStyle,
    ...selectFieldProps
  } = props;
  const styles = useStyles();
  const innerClassName: string = transparent ? styles.transparent : ''
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChangeValue) {
      const value = e.target.value;
      onChangeValue(value);
    }
  }
  const itemKeys = React.useMemo(() => {
    const items: any[] = menuItems || [];
    return items.map(() => Math.random());
  }, [menuItems]);

  const makeChildren = () => {
    if (!menuItems || !menuItems.length) {
      return [];
    }
    if (typeof menuItems[0] === 'string') {
      return (menuItems as string[]).map((item: string, index: number) => (
        <MenuItem key={itemKeys[index]} value={item}>{item}</MenuItem>
      ));
    }
    const labelKey = itemLabel || 'label';
    const valueKey = itemValue || 'value';
    return (menuItems as object[]).map((item: object, index: number) => {
      const childLabel = item[labelKey] || '';
      const value = item[valueKey] || '';
      return <MenuItem key={itemKeys[index]} value={value}>{childLabel}</MenuItem>;
    });
  };

  const defaultInputStyle = selectFieldProps.variant === 'standard' ? {
    backgroundColor: 'white', height: 45,
  } : {};

  return (
    <div
      className={className ? `${styles.root} ${className}` : styles.root}
      style={style}
    >
      {!!label && <label className={styles.label}>{label}</label>}
      <Select
        className={innerClassName}
        onChange={selectFieldProps.onChange || handleChange}
        variant={selectFieldProps.variant || defaultProps.variant}
        style={{ ...defaultInputStyle, ...(inputStyle || {}) }}
        {...selectFieldProps}
      >{children || makeChildren()}
      </Select>
    </div>
  );
};
