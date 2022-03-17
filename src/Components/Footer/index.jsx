import Logo from "../../Assets/images/logo.png";
import styled from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styled.container}>
      <div className={styled.footerContent}>
        <div>
          <h3>Acerca de</h3>
          <ul>
            <li>Quienes Somos</li>
          </ul>
        </div>
        <div>
          <h3>Términos y condiciones</h3>
          <ul>
            <li>Quienes Somos</li>
          </ul>
        </div>
        <div>
          <h3>Ayuda / PQR</h3>
          <ul>
            <li>Quienes Somos</li>
          </ul>
        </div>
      </div>
      <div className={styled.footer}>
        <img src={Logo} alt="Logo Everyone's Store" />
      </div>
    </footer>
  );
};

export default Footer;
