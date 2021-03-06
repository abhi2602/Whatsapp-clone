import React, { useContext } from 'react';
import { AppBar, Toolbar,makeStyles, Box } from '@material-ui/core';
import { AccountContext } from '../context/AccountProvider';



//component import
import Login from './account/Login';
import ChatBox from './ChatBox';




const useStyles = makeStyles({
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'
    },
    component:{
        background:'#dcdcdc',
        height:'100vh'
    },
    Header:{
        height:115,
        background:'#00bfa5',
        boxShadow:'none'
    }
})


 const Messenger = () =>{
     const classes = useStyles();
     const {account} = useContext(AccountContext);
     return(
         <Box className={classes.component}>
            <AppBar className={account?classes.Header:classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
           {account? <ChatBox/>: <Login/>}
        </Box>
     )
 }

 export default Messenger;