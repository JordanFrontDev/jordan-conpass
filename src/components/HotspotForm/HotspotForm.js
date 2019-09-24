import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { addHotspot } from '../../actions/actions';
import { useStyles } from './HotspotFormStyles';
import uuid from 'uuid/v4';


const HotspotForm = ({ onAddHotspot, open, setOpen, posX, posY }) => {
    const classes = useStyles();
    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');

    const handleClose = () => {
        setOpen(false);
    }

    const onTitleChange = (e) => {
        setTitleField(e.target.value.trimLeft());
    }

    const onDescriptionChage = (e) => {
        setDescriptionField(e.target.value.trimLeft());
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTitleField('');
        setDescriptionField('');
        onAddHotspot(uuid(), titleField, descriptionField, posX, posY);
        handleClose();

    }
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="Add new hotspot">{"Please put the hotspot information"}</DialogTitle>
                <form onSubmit={onFormSubmit} >
                    <DialogContent className={classes.form}>
                        
                        <TextField
                        id="title"
                        name='title'
                        value={titleField}
                        label="Title"
                        onChange={onTitleChange}
                        required
                        margin="normal"
                        variant="standard"
                      />

                        <TextField
                        id="outlined-textarea"
                        value={descriptionField}
                        label="Description"
                        onChange={onDescriptionChage}
                        multiline
                        required
                        margin="normal"
                        variant="standard"
                      />

                    </DialogContent>
                    <DialogActions>

                        <Button type='submit' color="primary" autoFocus variant='contained'>
                           Ok
                    </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddHotspot: (id, title, description, x, y) => dispatch(addHotspot(id, title, description, y, x))

    }
}

export default connect(null, mapDispatchToProps)(HotspotForm);