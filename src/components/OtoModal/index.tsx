import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';

interface IProps {
  onClose: VoidFunction;
  label?: string;
  id?: string;
  children: JSX.Element;
}
const OtoModal = (props: IProps) => {
  const { onClose, label, id , children } = props;
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return(
    <Modal open={true} onClose={onClose} aria-labelledby={label} id={id}>
      <Box sx={style}>{children}</Box>
    </Modal>
  )
};

export default OtoModal;