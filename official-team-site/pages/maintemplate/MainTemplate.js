import Navbar from "../../components/navbar/Navbar";
import styles from "./MainTemplate.module.css";
import { Grid  } from "@mui/material";
import DetailsAboutUs from "./details-about-us/DetailsAboutUs";


export default function MainTemplate(){
    return(
        <>
        <div >
        <Grid md={12} className={styles.MainTemplateBackground}>
        <Navbar/>
        </Grid>
        <Grid md={12}>
           <DetailsAboutUs/>
        </Grid>
        </div>
       
        </>
    )
}