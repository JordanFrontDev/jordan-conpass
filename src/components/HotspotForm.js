import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { addHotspot } from '../actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import uuid from 'uuid/v4';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column'
    }
})

const HotspotForm = ({ onAddHotspot, open, setOpen, posX, posY }) => {
    const classes = useStyles();
    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');

    const handleClose = () => {
        setOpen(false);
    }

    const onTitleChange = (e) => {
        setTitleField(e.target.value);
    }

    const onDescriptionChage = (e) => {
        setDescriptionField(e.target.value);
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
                <ValidatorForm onSubmit={onFormSubmit} >
                    <DialogContent className={classes.form}>

                        <TextValidator
                            value={titleField}
                            name='title'
                            margin='normal'
                            placeholder='Navbar'
                            onChange={onTitleChange}
                            validators={['required']}
                            errorMessages={['You must provide a title']}
                        />

                        <TextValidator
                            value={descriptionField}
                            name='description'
                            margin='normal'
                            placeholder='For user navigation'
                            onChange={onDescriptionChage}
                            validators={['required']}
                            errorMessages={['You must provide a description']}
                        />

                    </DialogContent>
                    <DialogActions>

                        <Button type='submit' color="primary" autoFocus variant='contained'>
                            Agree
                    </Button>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                    </Button>
                    </DialogActions>
                </ValidatorForm>
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