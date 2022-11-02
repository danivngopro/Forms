import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../../pages/homePage';

export default function FormDialog() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
       setOpen(true); 
  },[]);

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>סקר חדש</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="שם הסקר"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>הוספת סקר</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
