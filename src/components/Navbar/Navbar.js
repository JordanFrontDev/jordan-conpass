import React from 'react';
import logo from '../../assets/logo.png';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './NavbarStyles';


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
