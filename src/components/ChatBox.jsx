import { Box, Dialog,withStyles,makeStyles } from "@material-ui/core";

//// component
import Menu from './menu/Menu'



const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        minWidth:380
    },
    rightComponent:{
        borderLeft:'1px solid rgba(0,0,0,0.14)'
    }
})

const style ={
    dialogPaper:{
        height:'95%',
        width:'91%',
        //marginTop:'12%',
        boxShadow:'none',
        borderRadius:'none',
        maxHeight:'100%',
        maxWidth:'100%',
        Overflow:'hidden'
    }
}

const Chatbox = ({classes}) => {

    const classname = useStyles();
    return(
        <Dialog
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
        <Box className={classname.component}>
            <Box className={classname.leftComponent}>
                <Menu />
            </Box>
            <Box className={classname.rightComponent}>
hii
            </Box>
        </Box>
        </Dialog>
    )
}


export default withStyles(style)(Chatbox);