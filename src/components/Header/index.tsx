import AccountIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import LanguageIcon from '@mui/icons-material/Language';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
// import ADI_logo from '../../assets/otoSense_logo.svg';
import { arrowStyle, cloudIconStyle, CloudIconWrapper, HeaderLeft,
    HeaderList, HeaderLogo, HeaderRight, HeaderText, HeaderWrapper,
    iconStyle, logoutMenuStyle } from './styles';

interface IProps {
    version: string | number;
    account: string;
    logout: VoidFunction;
    currentDateTime: string;
    isLoginModeOnline: boolean;
    setCurrentUserSession: VoidFunction;
    toggleDateTimeFormat: VoidFunction;
    languageOptions: string[];
    setLocale: (option: LOCALES) => void;
    textVersion: string;
    locale: string;
    textLogout: string;
    setCurrentTimestamp: () => void;
    logoFile: string;
}

export enum LOCALES {
    DANISH = 'da',
    ENGLISH = 'en',
    FRENCH = 'fr',
    JAPANESE = 'jp',
    KOREAN = 'ko',
    SPANISH = 'es',
    HUNGARIAN = 'hu'
}

const Header = (props: IProps) => {
    const {
        version,
        account,
        logout,
        currentDateTime,
        isLoginModeOnline,
        setCurrentUserSession,
        toggleDateTimeFormat,
        languageOptions,
        setLocale,
        textVersion,
        locale,
        textLogout,
        setCurrentTimestamp,
        logoFile,
    } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorAccount, setAnchorAccount] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openAccount = Boolean(anchorAccount);

    const itemClicked = (opt: any) => {
        setLocale(opt);
        setAnchorEl(null);
    };

    useEffect(() => {
        const timerID = setInterval(() => setCurrentTimestamp(), 1000);

        return function cleanup() {
            clearInterval(timerID);
            };
    });

    return (
        <HeaderWrapper component="header">
          <HeaderLeft className="oto-header__left" >
            <HeaderLogo src={logoFile} alt="Analog Devices logo" title={version + ''} />
            <HeaderText m={'auto'}>{textVersion}: {version}</HeaderText>
          </HeaderLeft>
          <HeaderRight>
            <HeaderList
              aria-label="Language settings"
              sx={{ textTransform: 'uppercase' }}
            >
              <ListItem
                  button
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{height: '100%'}}
              >
                <LanguageIcon sx={iconStyle} />
              <ListItemText
                  primary={locale}
                  // secondary={<AccessAlarmIcon color="primary" />}
              />
                  <ArrowDropDownIcon sx={arrowStyle}/>
              </ListItem>
            </HeaderList>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    'role': 'listbox',
                    }}
                    sx={{textTransform: 'uppercase', height: '100%'}}
                >
                    {languageOptions.map((option, i) => {
                        return(
                            <>
                                <MenuItem
                                    key={`header-language-${option}-${i}`}
                                    divider={i !== 2 ? true : false}
                                    sx={{justifyContent: 'center', width: '100px', pt: 0.5, pb: 0.5}}
                                    onClick={() => itemClicked(option)}
                                >
                                  {option}
                                </MenuItem>
                            </>

                        );
                    })}
                </Menu>
                <CloudIconWrapper onClick={setCurrentUserSession}>
                {isLoginModeOnline ? <CloudDoneIcon sx={cloudIconStyle}/> : <CloudOffIcon sx={cloudIconStyle}/>}
                </CloudIconWrapper>
                <HeaderText m={'auto'} onClick={() => toggleDateTimeFormat()}>
                    {currentDateTime}
                </HeaderText>
                <HeaderList
                    aria-label="Account info"
                >
                    <ListItem
                        button
                        id="account-button"
                        aria-haspopup="listbox"
                        aria-expanded={openAccount ? 'true' : undefined}
                        onClick={(e) => setAnchorAccount(e.currentTarget)}
                        sx={{height: '100%'}}
                    >
                        <AccountIcon sx={iconStyle} />
                    <ListItemText
                        primary={account}
                    />
                        <ArrowDropDownIcon sx={arrowStyle}/>
                    </ListItem>
                </HeaderList>
                <Menu
                    id="account-menu"
                    anchorEl={anchorAccount}
                    open={openAccount}
                    onClose={() => setAnchorAccount(null)}
                    MenuListProps={{
                    'aria-labelledby': 'account-button',
                    'role': 'listbox',
                    }}
                    sx={logoutMenuStyle}
                >
                    <MenuItem onClick={logout} sx={{width: '168px'}}>
                        {textLogout}
                    </MenuItem>
                </Menu>
            </HeaderRight>
        </HeaderWrapper>
    );
};

export default Header;
