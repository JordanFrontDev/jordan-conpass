import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 4rem'
    },
    logo: {
        width: '13rem',
        height: '100%'
    },
    list: {
        display: 'flex',
        '&:last-child': {
           paddingRight: '15vw'
        }
    },
    listItem: {
        listStyle: 'none',
        color: '#adaba8',
        marginLeft: '3rem',
        fontSize: '1.5rem'
    }
})