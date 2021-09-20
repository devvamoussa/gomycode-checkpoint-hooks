import {useState} from 'react';
import MovieCard from "./MovieCard"


const MovieList = () => {
    const [movie , setMovie] = useState([
        {
            title:"Naruto",
            description:"NARUTO | NARUTO DÉVOILE ENFIN SA FORME FINALE !",
            posterURL: "https://youtu.be/x-3EwrVGDG4?t=2",
            rating:"",
            id: 1 ,
            poster:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.techtribune.net%2Fanime%2Fnaruto-pitch-plaide-pour-une-prequelle-plus-quune-suite%2F140139%2F&psig=AOvVaw0MHPF-h0ZXMIVT4J9bIlZu&ust=1632168384944000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCJ3KHri_MCFQAAAAAdAAAAABAD"
        },

        {
            title:"Kuroko basket",
            description:"Kuroko no basket Last game meilleurs moments VF",
            posterURL:"https://youtu.be/oduSr2JTgp0",
            rating:"",
            id: 2,
            poster:"https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXEJxZcSfPnts7l2RDSGnbv4ySEalJCc8S3gTrTjrvWUBdgpaRBgeaKRrCoNrI9j11nJ1QJvR_2te0HFKTYDEAw3183s.jpg?r=635"
        },

        {
            title:"Olive et Tom",
            description:"Olive et Tom - Le retour La Paire en Or à nouveau réunie !",
            posterURL:"https://youtu.be/uOub-WLoRKA",
            rating:"",
            id: 3,
            poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nostalgift.com%2Fwp-content%2Fuploads%2F2021%2F02%2FBanniere-Olive-et-Tom.png&imgrefurl=https%3A%2F%2Fwww.nostalgift.com%2Folive-et-tom-dessin-anime-star-des-annees-80%2F&tbnid=7kVJd5pgflpCCM&vet=12ahUKEwj-5YGdwYvzAhUDlBoKHV91BhsQMygHegUIARDcAQ..i&docid=nriX1_9w4QsWFM&w=1640&h=924&q=Olive%20et%20Tom&ved=2ahUKEwj-5YGdwYvzAhUDlBoKHV91BhsQMygHegUIARDcAQ"
        },
        
        {
            title:"Galactik Football",
            description:"Galactik Football La Star",
            posterURL:"https://youtu.be/XMlYSVAXqJ0",
            rating:"",
            id: 4,
            poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/ "
        },

        {
            title:"Les Dalton",
            description:"Les Dalton | La fatigue de Joe | Compilation HD (FR)",
            posterURL:"https://youtu.be/J_j7LhsQVMY",
            rating:"",
            id: 5,
            poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.programme-tv.net%2Fimgre%2Ffit%2Fhttps.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2Ff26d22f8472a289e.2Ejpg%2F630x355%2Fquality%2F80%2Fles-dalton.jpg&imgrefurl=https%3A%2F%2Fwww.programme-tv.net%2Fprogramme%2Fjeunesse%2Fr206166-les-dalton%2F6787400-les-vacances-des-dalton%2F&tbnid=bZ2p12S1jv4vAM&vet=12ahUKEwiD5calw4vzAhUV_hoKHWNcD4kQMygJegUIARDnAQ..i&docid=Gzo-XfuARcOaJM&w=630&h=355&q=Les%20Dalton&ved=2ahUKEwiD5calw4vzAhUV_hoKHWNcD4kQMygJegUIARDnAQ"
        }, 

        {
            title:"Goku",
            description:"Goku Vs Buu Vf",
            posterURL:"https://youtu.be/cDTLugSDANI",
            rating:"",
            id: 6,
            poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
        },

        {
            title:"AVATAR",
            description:"Le dernier maître de l'air saison 1",
            posterURL:"https://youtu.be/HRg1pjtwrjM",
            rating:"",
            id: 7,
            poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
        },

        {
            title:"One Piece",
            description:"One Piece Episode 992 English Subbed FULL- One Piece Latest Episode HD",
            posterURL:"https://youtu.be/XFJeDdmQMzY",
            rating:"",
            id: 8,
            poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/ "   
        }
    ])
    

    return (
        <>
        
            {movie.map(list =>
            <MovieCard list={movie[0] } key={movie.id}/>
        )}
            
        </>
    )
}
export default MovieList;
