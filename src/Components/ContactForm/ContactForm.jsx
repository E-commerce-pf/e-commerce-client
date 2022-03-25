import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";
import swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { sendEmail } from "../../Services/sendEmail";
import { supportMsgTemplate } from "../../Templates/clientSupport";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },
  textfield: {
    width: "100%",
  },
}));

const ContactForm = ({ state, setState }) => {
  const styles = useStyles();

  const form = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("fullname");
    const data = {
      name,
      email: formData.get("email"),
      template: supportMsgTemplate(name),
    };

    try {
      const response = await sendEmail(data);
      swal.fire(response.success, "", "success");
    } catch ({ response }) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.error,
      });
    }
  };

  return (
    <form ref={form} className={styles.modal}>
      <div align="center">
        <h2>Datos de contacto</h2>
      </div>
      <TextField
        name="fullname"
        label="Nombre completo"
        className={styles.textfield}
        required
      />
      <br />
      <TextField
        name="email"
        label="Correo Electrónico"
        className={styles.textfield}
        required
      />
      <br /> <br />
      <div align="right">
        <Button onClick={handleSubmit} color="primary">
          Enviar
        </Button>
        <Button onClick={() => setState(!state)}>Cancelar</Button>
      </div>
    </form>
  );
};

export default ContactForm;
