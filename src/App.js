import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Button from '@material-ui/core/Button';
import HotspotList from './components/HotspotList';
import HotspotForm from './components/HotspotForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    scrollBehavior: 'hidden',
    padding: '0 25rem'
  },
  root: {
    height: '100%',
    position: 'absolutes'
  },
  button: {
    borderRadius: '2rem',
    backgroundColor: '#0e9e9e',
    color: '#fff',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    marginTop: '3.5rem'
  },
  contentBox: {
    width: '100%',
    textAlign: 'center'

  }
})

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [ posX, setPosX ] = useState(0);
  const [ posY, setPosY ] = useState(0);


  //enters in edit mode
  const onCreateHotspotMode = () => {
    setEditMode(!editMode);
  }

  //when clicked, set the mouse position to state and open dialog box
  const handleClick = e => {
    if(editMode) {
      e.preventDefault();
      setPosX(e.clientX + -10);
      setPosY(e.clientY + -10);
      setOpen(true);

      onCreateHotspotMode();
    }else {
      return null;
    }
   
  };

  //when edit mode is true, creates a hover effect in all elements
  const handleover = e => {
    if (editMode) {
      var x = e.clientX,
        y = e.clientY,
        element = document.elementFromPoint(x, y);
      element.style.backgroundColor = "rgba(255,0,0,0.2)";
      element.style.transitionDuration = "0.4s";
      element.onmouseout = () => {
        element.removeAttribute("style");
      };
    }else {
      return null;
    }

  };

  return (
    <div
      className={classes.root}
      onClick={handleClick}
      onMouseOver={handleover}
    >
      <NavBar />
      <div className={classes.main}>
        <div className={classes.contentBox}>
          <Button variant='contained' className={classes.button} onClick={onCreateHotspotMode}>Create Hotspot</Button>
          <HotspotList />
          <HotspotForm open={open} setOpen={setOpen} posX={posX} posY={posY} />
        </div>
      </div>
    </div>
  );
}

export default App;
