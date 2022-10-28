import Button from '@mui/material/button';
import styles from "./Button.module.css";

export default function Buttons(props) {
  console.log(props)
  return (
    <>
      {
        props.value == "Know more"
          ?
          <Button
          style={{color:"white"}}
          className={`${"p-2"} ${styles.conditionButton}`}
          >
            {props.value}
          </Button>
          :

          <Button
            className={`${"text-dark p-3 "} ${styles.ButtonGrid}`}
          >
            {props.value}
          </Button>
      }

    </>
  )
}