import React from 'react';
import Hotspot from './Hotspot';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import uuid from 'uuid/v4';
import { connect } from "react-redux";

const useStyles = makeStyles({
    root: {
        textAlign: 'left'
    },
    title: {
        backgroundColor: '#e8e7e6',
        color: '#adaba8',
        fontWeight: '500',
        padding: '0.5rem',
    },
    msg: {
        color: '#adaba8'
    }
})


const HotspotList = ({hotspots}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>List of Hotspots</h2>
            {
                hotspots.map((hotspot, i) => {
                    return <React.Fragment  key={uuid()}>
                        <Hotspot
                            id={hotspot.id}
                            count={i + 1}
                            title={hotspot.title}
                            description={hotspot.description}
                            posX={hotspot.x}
                            posY={hotspot.y}
                        />
                        {i < hotspots.length -1 && <Divider />}
                    </React.Fragment>
                })
            }
            {hotspots.length <= 0 && <h1 className={classes.msg}>Add a hotspot to get started</h1>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        hotspots: state
    }
}

export default connect(mapStateToProps)(HotspotList);