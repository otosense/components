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

- Use import 

### Usage

#### Buttons

variants: 'contained' (default),  'outlined', 'text'
color: 'primary', 'secondary', 'error', 'success', 'info', 'warning', 'cancel', 'critical', 'gray'
size: 'small', 'medium', 'large'

* default is color='primary', variant='contained', and size='medium'. You don't need to write these.

- Please see Figma file to refer all the variants and color options

#### Select
Select field is styled in Form Control. 
Use default and apply size props in the Form Control (not Select) component. 
Most of the time, we need Typography component with variant overline which is styled for this.

Example:
<FormControl size="medium">
  <Typography variant="overline">
    {header}
  </Typography>
  <Select
    value={value}
    onChange={handleChange}
  >
    {options.map((name, j) => {
      return (
        <MenuItem key={`assettype-option-${name}-${j}`} value={name}>
          {name}
        </MenuItem>);
    })}
  </Select>
</FormControl>

#### Dialog
- use with DialogTitle, DialogContent, and DialogActions to have right spacings.

<Dialog>
  <DialogTitle>title/header here</DialogTitle>
  <DialogContent>contents here</DialogContent>
  <DialogActions>Close/save button here</DialogActions>
</Dialog>

#### Header component takes props below:

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

#### OtoModal component takes props below *children is passed automatically

- please use Dialog for general use. This may be deleted.

  onClose: VoidFunction;
  label?: string;
  id?: string;
  children: JSX.Element;

<OtoModal onClose={closeFunction} id="id of model" label="my label">
  // all children go here
</OtoModal>