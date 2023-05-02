import logo from "./logo.png"
import search from "./search.png"
import styles from "./Header.module.scss"

const Header = () => {

    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Image"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} placeholder="O que você procura ?" type="text"/>
                <img src={search} alt="Search Image"/>
            </div>
        </header>
    )
}

export default Header