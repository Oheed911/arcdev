import React, {useState} from 'react'
import theme from "./Theme";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Box, Button, Tab, Tabs, Typography, useScrollTrigger} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme=> ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em"
    },
    companyLogo:{
        height:"7em"
    },
    tabName:{
        marginLeft:"auto",
    },
    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px",
    },
    estimateButton:{
        ...theme.typography.estimateButton,
        height:"45px",
        borderRadius:"25px",
        marginLeft:"25px",
        marginRight:"25px"
    },
}))

function Navbar(){



    const classes = useStyles();
    const[value,setValue]=useState(0);
    const handleChange=(e,value)=>
    {
        setValue(value);
    }
    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position={"fixed"}>
                    <Toolbar disableGutters={true}>
                        <img alt="company logo" className={classes.companyLogo} src={logo} />
                        <Tabs value={value} onChange={handleChange} className={classes.tabName}  >
                            <Tab className={classes.tab} value="1" label={"Home"}/>
                            <Tab className={classes.tab} value="2" label={"Services"}/>
                            <Tab className={classes.tab}  value="3" label={"The Revolution"}/>
                            <Tab className={classes.tab} value="4" label={"About Us"}/>
                            <Tab className={classes.tab}  value="5" label={"Contact Us"}/>
                        </Tabs>
                        <Button variant={"contained"} color={"secondary"} className={classes.estimateButton}>Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>

    );
}
export default Navbar;