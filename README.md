# OtoSense Design Library

Material-UI themes and shared view components.

Usage

Header component takes props below:

<Header
  version={version}
  account={account}
  logout={logout}
  currentDateTime={currentDateTime}
  isLoginModeOnline={isLoginModeOnline}
  setCurrentUserSession={setCurrentUserSession}
  toggleDateTimeFormat={toggleDateTimeFormat}
  languageOptions={availableLocales}
  localeFc={locale}
  textVersion={locale.getString('general.version')}
  locale={locale.locale}
  textLogout={locale.getString('global.logout')}
  setCurrentTimestamp={setCurrentTimestamp}
  logoFile={ADI_logo}
/>

version: string | number;
account: string;
logout: VoidFunction;
currentDateTime: string;
isLoginModeOnline: boolean;
setCurrentUserSession: VoidFunction;
toggleDateTimeFormat: VoidFunction; #change local or UTC
languageOptions: string[]; #available locales
localeFc: any; #the locale function
textVersion: string;
locale: string; #current locale
textLogout: string;
setCurrentTimestamp: () => void;
logoFile: string;