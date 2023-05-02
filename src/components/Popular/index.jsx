import photosPopular from "./photos-popular.json"
import styles from "./Popular.module.scss"

const Popular = () => {

    return (
        <aside className={styles.populares}> 
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {photosPopular.map((photos) => {
                    return (
                        <li key={photos.id}>
                            <img src={photos.path} alt={photos.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}

export default Popular