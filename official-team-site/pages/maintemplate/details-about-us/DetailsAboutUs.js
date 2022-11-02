import styles from "./DetailsAboutUs.module.css";
import { Grid } from "@mui/material";
import Button from "./../../../components/button/Button";

export default function DetailsAboutUs(){
    return(
    <>
    <h1 className={`${"mt-5"} ${styles.DetailsAboutUsHeading}`}>We have a deep & diverse expertise<br/> under one umbrella</h1>
    <h5 className={`${"mt-3"} ${styles.DAUsubHeading}`}>We partner with companies and ecosystems,<br/> starting from ideation and steering until the product<br/> reaches the end customer</h5>
    <Grid container className={"p-5"} style={{textAlign:"center"}}>
        <Grid item md={4} sm={4} xs={12}>
            <span className={styles.counts}>25+</span> <span style={{color:"#3A3B3C"}}>companies</span>
            <div style={{color:"#3A3B3C"}}>Businesses are cut across diverse sectors such as Mechanical, Electrical, Digital, and Consulting</div>
        </Grid>
        <Grid item md={4} sm={4} xs={12}> 
             <span className={styles.counts}>100+</span> <span style={{color:"#3A3B3C"}}>years</span>
            <div style={{color:"#3A3B3C"}}>Our massive collective experience <br/> allows us to make transformative <br/> industry collaborations</div>
        

        </Grid>
        <Grid item md={4} sm={4} xs={12}> 

        <span className={styles.counts}>$4,000</span> <span style={{color:"#3A3B3C"}}>Crores</span>
            <div style={{color:"#3A3B3C"}}>Total revenue of companies in the consortium</div>
        
        </Grid>

    </Grid>
    <Grid md={12} sm={12} xs={12} style={{textAlign:"center"}}>
     <Button
     id={"blue"}
     value={"Know more"}
     />
    </Grid>
    </>
    )
}