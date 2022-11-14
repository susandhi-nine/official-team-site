import Navbar from "../../components/navbar/Navbar";
import styles from "./MainTemplate.module.css";
import { Grid } from "@mui/material";
import DetailsAboutUs from "./details-about-us/DetailsAboutUs";
import HeaderInfo from "./header-info/HeaderInfo"
import MemberCompanies from "./member-companies/MemberCompanies";
import ProductService from "./products & services/ProductsServices";
import GetInTouch from "./get-In-touch/GetInTouch";
import Footer from "../../components/footer/Footer";

export default function MainTemplate() {
    return (
        <>
            <Grid container >
                <Grid md={12} className={`${"p-5"} ${styles.MainTemplateBackground}`}>
                    <Navbar />
                    <HeaderInfo />
                </Grid>
                <Grid md={12}>
                    <DetailsAboutUs />
                </Grid>

                <Grid md={12}>
                    <MemberCompanies />
                </Grid>

                <Grid md={12}>
                    <ProductService />
                </Grid>

                <Grid md={12}>
                    <GetInTouch />
                </Grid>

                <Grid md={12}>
                    <Footer />
                </Grid>
            </Grid>

        </>
    )
}