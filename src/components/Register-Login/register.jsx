import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import RegisterForm from './registerForm'; 



export default function RegisterModal({ open, onClose , onSuccessRegister}) {
    
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="register-modal" >
        <Typography className='title-account' variant="h6" component="h2">
          Register
        </Typography>
        <RegisterForm onClose={onClose} onSuccessRegister={onSuccessRegister}/>
      </Box>
    </Modal>
  );
}