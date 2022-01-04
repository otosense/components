// import StyledTextField from './components/StyledTextField';
// import StyledSelectField from './components/StyledSelectField';
import Header from './components/Header';
import DataGrid, { DataGridColumns, LazyDataSource } from './components/DataGrid'
import otosenseTheme from './shared/theme';
import OtoModal from './components/OtoModal';
import ScrollToTopBtn from './components/ScrollToTop'
import { DataGridTools } from './components/DataGrid/DataGridHeader/DataGridToolbar';
import moment from 'moment';
import { DataGridRowActions } from './components/DataGrid/DataGridActionCell';

export {
  // StyledSelectField,
  // StyledTextField,
  Header,
  DataGrid, DataGridColumns, DataGridRowActions, DataGridTools, LazyDataSource,
  OtoModal,
  ScrollToTopBtn,
  otosenseTheme,
};

export function setLocale(localeKey) {
    moment.locale(localeKey)
}
