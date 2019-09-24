import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


export const useStyles = makeStyles({
    root: {
        display: 'flex',
        padding: '0 .5rem',
        textAlign: 'left'
    },
    title: {
        color: '#999794',
        width: '100%',
        fontWeight: '500',
    },
    Removebutton: {
        backgroundColor: '#db2727',
        borderRadius: '10px',
        height: '3rem',
        textTransform: 'uppercase',
        margin: 'auto 0',
        textAlign: 'center',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        color: '#fff',
        transition: 'all .2s',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    UpdateButton: {
        backgroundColor: '#27c6cf',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        height: '3rem',
        margin: 'auto 0',
        cursor: 'pointer',
        outline: 'none',
        marginRight: '1rem',
        color: '#fff',
        transition: 'all .2s',
        '&:hover': {
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

export const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        padding: '2rem'
    },
}))(Tooltip);