import Logo from "../../Assets/Images/logo.png";
import styled from "./Footer.module.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styled.container}>
      <div className={styled.footerContent}>
        <div>
          <h3>About</h3>
          <ul>

            <li>
            <Link className={styled.Linkk} to="/quienessomos" >
             About us
           </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Terms and conditions</h3>
          <ul>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h3>Help / FAQ</h3>
          <ul>
            <li>About us</li>
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
