import { Card, Grid } from "@mui/material";
import Button from "../../../components/button/Button";
import styles from "./MemberCompanies.module.css";

export default function MemberCompanies() {
    return (
        <>
            <Grid md={12} className={`${styles.MCLayout} ${"mt-5"}`}>
                <Grid md={12} className={`${"p-5"}`} style={{ background: "black", textAlign:"center" }}>
                    <Grid md={5.8} className={`${"text-dark"} ${styles.MCContentLayout} ${"mt-5"}`}>
                        <Grid className={`${"p-4"} ${styles.MCContents}`}>
                            Our Member Companies
                            <br />
                        </Grid>

                    </Grid>
                    <Grid md={12} style={{ textAlign: "center" }} className={"mt-5"}>
                        <Button
                            id={"blue"}
                            value={"View Member Companies"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}