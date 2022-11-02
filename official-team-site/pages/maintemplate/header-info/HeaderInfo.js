import { Grid } from "@mui/material";
import styles from "./HeaderInfo.module.css";

export default function MainInfo() {
    return (
        <>
            
            <Grid md={12} sm={12} xs={12} className={styles.container}>
                <Grid  className={styles.headingContent}>Many Companies...<br/> One Community!</Grid>
                <Grid className={styles.headingSubContent}>KEEN is a Consortium of diverse businesses based in<br/> 
                    Bangaloore. We design, develop and deliver
                    world-class<br/> products across diverse sectors.
                </Grid>
            </Grid>
            
           
        </>
    )
}