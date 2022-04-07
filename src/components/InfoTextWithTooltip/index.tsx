import React from 'react';

import { Tooltip, Typography } from '@mui/material';
import { FlexBox, TextIconBox } from '../Boxes';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeProvider } from '@mui/material/styles';
import otosenseTheme2022 from '../../shared/theme2022';

interface IProps {
  tooltipText?: string;
  tooltipJSX?: JSX.Element;
  infoText: string;
}

const InfoTextWithTooltip = (props: IProps) => {
  const { tooltipText, infoText, tooltipJSX } = props;
  const content = tooltipJSX ? tooltipJSX : tooltipText;
  return(
    <ThemeProvider theme={otosenseTheme2022}>
      <TextIconBox>
        <Tooltip title={content} placement="bottom"  arrow sx={{'&.MuiTooltip-arrow': {
            backgroundColor: '#003965',
          },
        }}>
          <FlexBox sx={{cursor: 'pointer'}}>
            <Typography variant="body1" mr={0.3} sx={{textTransform: 'none'}}>{infoText}</Typography>
            <InfoIcon sx={{color: 'secondary.contrastText', marginRight: 0.3, width: 24, height: 24}}/>
          </FlexBox>
        </Tooltip>
      </TextIconBox>
    </ThemeProvider>
    
  );
};

export default InfoTextWithTooltip;