import Banner from "../assets/banner.png";
import styles from "./PaginalInicial.module.scss";
import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Galery from "components/Galery";
import Popular from "components/Popular";

function PaginaInicial() {
  return (
    <>
      <Header/>
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={Banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galery />
          <Popular />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default PaginaInicial