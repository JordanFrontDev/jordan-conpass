import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { removeHotspot } from '../actions/actions';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        padding: '0 .5rem',
        textAlign: 'left'
    },
    title: {
        color: '#adaba8',
        width: '100%',
        fontWeight: '500',
    },
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all .2s',
        '&:hover': {
            color: 'red',
            transform: 'scale(1.2)'
        }
    },
    '@keyframes pulse': {
        'to': {
            boxShadow: '0 0 0 25px rgba(232, 76, 61, 0)'
        }
    },
    pulseButton: {
        zIndex: '1000',
        position: 'relative',
        width: '20px',
        height: '20px',
        border: 'none',
        boxShadow: '0 0 0 0 rgba(232, 76, 61, 0.7)',
        borderRadius: '50%',
        backgroundColor: '#e84c3d',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        animation: '$pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)'
    },
    hotspotTitle: {
        color: 'darkgray'
    },
    hotspotDescription: {
    
    }

})

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        padding: '2rem'
    },
}))(Tooltip);

const Hotspot = ({ title, count, id, description, onRemoveHotspot, posX, posY }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{`${title} #${count}`}</h2>
            <button className={classes.button} onClick={() => onRemoveHotspot(id)}>remove</button>
            
            <LightTooltip title={<div><h1 className={classes.title}>{title}</h1><h2>{description}</h2></div>}>
                <div className={classes.pulseButton} style={{ position: 'absolute', top: `${posX}px`, left: `${posY}px` }}></div>
            </LightTooltip>
        </div>
    );
};

const stateDispatchToProps = (dispatch) => {
    return {
        onRemoveHotspot: (id) => dispatch(removeHotspot(id))
    }
}

export default connect(null, stateDispatchToProps)(Hotspot);