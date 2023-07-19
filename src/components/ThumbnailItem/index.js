// Write your code here.
import './index.css'

const ThumbnailItem = (props) => {
    const {imagesDetails,isSelected,updateImage}=props
    const {thumbnailUrl,thumbnailAltText,id}=imagesDetails
    const onClickImage = () => {
        updateImage(id)
    }
    const isSelectedImage = isSelected ? 'active-image' : 'non-active-image'
    return(
        <li className="thumbnail-list">
        <button className="img-btn" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={isSelectedImage}/>
        </button>
        </li>
    )
}
export default ThumbnailItem
