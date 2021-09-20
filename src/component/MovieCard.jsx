
import "./MovieCard.css"

const MovieCard = ({list}) => {
    return (
        <div className="container">
            
            <div className="content">
            <iframe width="400" height="200" src={list.posterUrl} 
            title={list.title} frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                <p>{list.description}</p>
            </div>
        </div>
    )
}
export default MovieCard;
