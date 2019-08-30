import React from 'react';
import logo from '../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
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

const NavBar = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <img src={logo} className={classes.logo} alt='Conpass Logo'></img>
                <ul className={classes.list}>
                    <a href='# ' className={classes.listItem}><li>Link fake 1</li></a>
                    <a href='# ' className={classes.listItem}><li>Link Fake 2</li></a>
                    <a href='# ' className={classes.listItem}><li>Link Fake 3</li></a>
                    <a href='# ' className={classes.listItem}><li>Link Fake 4</li></a>
                </ul>
            </div>
            <Divider variant='middle' />
        </React.Fragment>

    );
};

export default NavBar;
