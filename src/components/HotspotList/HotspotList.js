import React from 'react';
import Hotspot from '../Hotspot/Hotspot';
import Divider from '@material-ui/core/Divider';
import uuid from 'uuid/v4';
import { removeAll } from '../../actions/actions';
import { connect } from "react-redux";
import { useStyles } from './HotspotListStyles';


const HotspotList = ({ hotspots, onRemoveAll }) => {
    const classes = useStyles();
    console.log(hotspots);
    return (
        <div className={classes.root}>
        <div className={classes.title}>
            <h2 >List of Hotspots</h2> 
            <h2 onClick={onRemoveAll} className={classes.button}>Remove All</h2>
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveAll: () => dispatch(removeAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotspotList);