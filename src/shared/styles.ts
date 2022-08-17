export const colors = {
  otosenseGray: '#3c4547',
  adiBlue: '#009FBD',
  lightGray: '#f3f3f3',
  error: '#f56d4d',
  white: '#ffffff',
};

export const inputStyles = {
  root: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    color: colors.otosenseGray,
    display: 'block',
    marginBottom: 8,
    textTransform: 'none',
    '::first-letter': {
      textTransform: 'uppercase',
    },
  },
  errorLabel: {
    color: colors.error,
  },
  transparent: {
    backgroundColor: 'inherit',
  },
}
