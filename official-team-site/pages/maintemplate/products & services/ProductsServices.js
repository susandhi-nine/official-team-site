import { Grid, Typography } from "@mui/material";
import styles from "./ProductService.module.css";
import Arrow from "../../../components/Arrow/Arrow";
import Buttons from "../../../components/button/Button";


export default function ProductService() {
  return (
    <>
      <Grid md={12} sm={12} xs={12} className={`${"mt-5 text-dark"} ${styles.PSLayout}`}>
        <Typography className={styles.PSHeading}>Products & Services</Typography>
        <Typography className={`${"mt-3"} ${styles.PSSubHeading}`}>We design, develop, and deliver world-class<br />
          products across various industries.
        </Typography>
      </Grid>
      <Grid className={`${"mt-5 p-5 d-flex"} ${styles.products}`} justifyContent={"space-between"}>
        <Grid className={"d-flex"} justifyContent={"space-between"}>

          {/* <Arrow 
          id={"left"}
          /> */}
          <Grid className={styles.ProductCardGrid}>sd </Grid>

          {/* <Arrow 
          id={"right"}
          /> */}
        </Grid>

        <Grid>
          <Typography className={`${styles.keenVentilatorHeading} ${"text-dark"}`}>KEEN VENTILATOR</Typography><br />
          <Typography style={{ color: "#3d3d3d" }}>An ICU Grade Top End Ventilator designed and <br />build in india for the world<br /><br />
            Architected to address: Adaptability,<br />Responsiveness, Patient Comfort, Ease of Use & Remote Diagnostics
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ textAlign: "center" }}>
        <Buttons
          id={"blue"}
          value={"Know More"}
        />

      </Grid>
      <br />
    </>
  )
}