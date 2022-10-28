import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Buttons from '../button/Button';
import styles from "./Navbar.module.css";

const NavbarData = ["About Us", "Member Companies", "Consortium","Get in touch"]

export default function Navbar(){


  
  return(
    <Grid container md={12} className={"p-5"}>
      <Grid item md={3}>
 Logo
      </Grid>
      <Grid item md={3}></Grid>
      <Grid item md={6} className={"d-flex"} justifyContent={"space-between"}>
        {NavbarData.map((item, index)=>(
        <Buttons
        
        value={item}
        />
        ))}
          
          
      </Grid>
      
    </Grid>
  )
}