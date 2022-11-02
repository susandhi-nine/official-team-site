import Button from '@mui/material/button';
import styles from "./Button.module.css";

export default function Buttons(props) {
  console.log(props)
  return (
    <>
      {
        props.id == "blue"
          ?
          <Button
          style={{color:"white"}}
          className={`${"p-2"} ${styles.conditionButton}`}
          >
            {props.value}
          </Button>
          :

          <Button
            className={`${"text-white p-3 "} ${styles.ButtonGrid}`}
          >
            {props.value}
          </Button>
      }

    </>
  )
}