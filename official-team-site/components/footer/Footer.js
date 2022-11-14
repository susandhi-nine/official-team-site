import { Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <>
        <Grid 
        md={12} sm={12} xs={12}
        className={`${styles.FooterMainGrid} ${"d-flex pt-5"}`}
        justifyContent={"space-between"}

        >

            <Grid md={2} sm={2} xs={12}>
                <div>Icon</div>
                <div className={`${styles.FooterLogoContent} ${"mt-4"}`}>KLE Enterpreneurs &<br/> Experts Network </div>
            </Grid>

            <Grid  md={2} sm={2} xs={12}>
              <div className={`${styles.FooterLabels}`}>Consortium</div>
              <div className={`${styles.FooterSubLabels} ${"mt-2"}`}>About<br/>
              Corporate Blog <br/>
              Email Newsletter
              </div>
            </Grid>

          <Grid  md={2} sm={2} xs={12}>
              <div className={`${styles.FooterLabels}`}>Resources</div>
              <div  className={`${styles.FooterSubLabels} ${"mt-2"}`}>Make in India<br/>
              Skill India <br/>
              Digital India <br/>
              SIDM
              </div>
            </Grid>

            <Grid  md={2} sm={2} xs={12}>
              <div className={`${styles.FooterLabels}`}>Support</div>
              <div className={`${styles.FooterSubLabels} ${"mt-2"}`}>Contact Us<br/>
              Privacy Policy<br/>
              Terms of Services
              </div>
            </Grid>

            <Grid  md={2} sm={2} xs={12}>
              <div>Twitter</div>
            </Grid>

        </Grid>
        </>
    )
}