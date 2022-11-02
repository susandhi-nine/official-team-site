import { Button } from "@mui/material";
import styles from "./Arrow.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from "react";

export default function arrow(props){
    const [test , setTest] = useState(false)
    
    return(
        <>
        <Button 
          
           className={`${"text-dark"} ${styles.arrow}`} 
           onMouseEnter={()=>setTest(true)}
            onMouseLeave={()=>setTest(false)}>
            {
                props.id == "left"
                ?
                <KeyboardBackspaceIcon className={ test ? styles.arrowIcon1: styles.arrowIcon}/>
                :

                <ArrowForwardIcon className={ test ? styles.arrowIcon1: styles.arrowIcon}/>
            }

        </Button>
   
        </>
    )
}