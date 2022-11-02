import styles from "./GetInTouch.module.css";
import { Grid, Typography } from "@mui/material";


export default function GetInTouch(){
    return(
        <Grid md={12} className={styles.GetInTouchBackground}>
        <Typography className={`${styles.GetInTouchHeading} ${"pt-5"}`}>Investing in India</Typography><br/>
        <Typography >We look forward to hearing your requirement</Typography>
        </Grid>
    )
}