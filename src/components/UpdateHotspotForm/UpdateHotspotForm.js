import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './UpdateHotspotFormStyles';


const UpdateHotspotForm = ({ onUpdateHotspot, id, setIsUpdating, title, description }) => {
    const [titleField, setTitleField] = useState(title);
    const [descriptionField, setDescriptionField] = useState(description);
    const classes = useStyles();

    const onTitleChange = (e) => {
        setTitleField(e.target.value.trimLeft());
    }

    const onDescriptionChange = (e) => {
        setDescriptionField(e.target.value.trimLeft());
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        onUpdateHotspot(id, titleField, descriptionField);
        setIsUpdating(false);

    }

    return (
        <form onSubmit={onFormSubmit} className={classes.form}>
        <TextField
            id="title"
            name='title'
            autoFocus={true}
            value={titleField}
            onChange={onTitleChange}
            label="Title"
            required
            margin="normal"
            variant="standard"
        />

        <TextField
            id="outlined-textarea"
            value={descriptionField}
            onChange={onDescriptionChange}
            className={classes.description}
            label="Description"
            multiline
            required
            margin="normal"
            variant="standard"
        />

        <Button type='submit' variant='contained' color='primary'>Confirm</Button>
    </form>

    )
};

export default UpdateHotspotForm;