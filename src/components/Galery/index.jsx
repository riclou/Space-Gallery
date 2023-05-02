import { useState } from "react"
import Tags from "../Tags"
import Cards from "./Cards"
import styles from "./Galery.module.scss"
import photos from "./photos.json"

const Galery = () => {

    const [itens, setItens] = useState(photos)
    const tags = [...new Set(photos.map((valor) => valor.tag))]

    const filterPhotos = (tag) => {
        const newPhotos = photos.filter((photo) => {
            return photo.tag === tag
        })

        setItens(newPhotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} allPhotos={setItens}/>
            <Cards itens={itens} styles={styles}/>
        </section>
    )
}

export default Galery