import instagram from "../../assets/instagram.svg"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.instagram.com/riclouu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Ricardo</p>
    </footer>
  );
};

export default Footer