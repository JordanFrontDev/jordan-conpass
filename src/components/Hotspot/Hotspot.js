import React, { useState } from 'react';
import { connect } from 'react-redux';
import UpdateHotspotForm from '../UpdateHotspotForm/UpdateHotspotForm';
import { removeHotspot, updateHotspot } from '../../actions/actions';
import { LightTooltip, useStyles } from './HotspotStyle';


const Hotspot = ({ title, count, id, description, onRemoveHotspot, posX, posY, onUpdateHotspot }) => {
    const classes = useStyles();
    const [isUpdating, setIsUpdating] = useState(false);
  
    return (
        <div className={classes.root}>
            {isUpdating ?
               <UpdateHotspotForm 
                    onUpdateHotspot={onUpdateHotspot}
                    id={id}
                    title={title}
                    description={description}
                    setIsUpdating={setIsUpdating}
               />
                :
                <React.Fragment>
                    <h2 className={classes.title}>{`${title} #${count}`}</h2>
                    <button className={classes.UpdateButton} onClick={() => setIsUpdating(true)}>Edit</button>
                    <button className={classes.Removebutton} onClick={() => onRemoveHotspot(id)}>remove</button>
                </React.Fragment>
            }

            <LightTooltip title={
                <div>
                    <h1>{title}</h1>
                    <h2 className={classes.title}>{description}</h2>
                </div>}>
                <div className={classes.pulseButton} style={{ position: 'absolute', top: `${posX}px`, left: `${posY}px` }}></div>
            </LightTooltip>
        </div>
    );
};

const stateDispatchToProps = (dispatch) => {
    return {
        onRemoveHotspot: (id) => dispatch(removeHotspot(id)),
        onUpdateHotspot: (id, title, description) => dispatch(updateHotspot(id, title, description))
    }
}

export default connect(null, stateDispatchToProps)(Hotspot);