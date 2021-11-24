# OtoSense Design Library

## Use yarn link to real-time modification

1. make sure you have yarn installed (npm i -g yarn)
yarn install
2. yarn pack-copy
  - if tsc is not found, run npm install -g typescript and try again

if tsc runs correctly:
3. in the components directory, yarn link
4. in QC at client, yarn link @otosense/components (edited) 
5. to update, run yarn pack-copy

## Material-UI themes and shared view components.

### Usage

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

----

OtoModal component takes props below *children is passed automatically

  onClose: VoidFunction;
  label?: string;
  id?: string;
  children: JSX.Element;

<OtoModal onClose={backToTable} id="id of model" label="my label">
  // all children go here
</OtoModal>