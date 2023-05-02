import styles from "./Tags.module.scss"
import photos from "../Galery/photos.json"

const Tags = ( { tags, filterPhotos, allPhotos } ) => {

    return (
        <div className={styles.tags}>
            <p>Filtre por Tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li onClick={() => filterPhotos(tag)} key={tag}>{tag}</li>
                        
                    )
                })}
                <li onClick={() => allPhotos(photos)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags