import { useState,forwardRef }from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Trend from 'react-trend';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down"
ref={ref}
{...props} />;
});

const TrendGraph = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined"
onClick={handleClickOpen}>
        {props.trend}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{ props.trend + " Fleet Health"}</DialogTitle>
        <DialogContent>
        <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
    gradient={['#f72047', '#ffd200', '#1feaea']}
    radius={0.9}
    strokeWidth={5}
    strokeLinecap={'square'}
  />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );


};

export default TrendGraph;