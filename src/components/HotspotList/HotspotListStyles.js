import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    root: {
        textAlign: 'left'
    },
    title: {
        backgroundColor: '#e8e7e6',
        color: '#999794',
        fontWeight: '500',
        padding: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        '& h2': {
            margin: '0'
        }
    },
    msg: {
        color: '#adaba8'
    },
    button: {
        transition: 'all .2s',
        cursor: 'pointer',
        fontWeight: '500',
        '&:hover': {
            color: 'red',
            transform: 'scale(1.1)'
        }
    }
})