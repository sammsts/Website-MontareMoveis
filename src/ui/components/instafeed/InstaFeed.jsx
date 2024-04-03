import './style.css'
import axios from "axios";
import { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';

const InstaFeed = (data) => {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        ScrollReveal().reveal('.scroll-effect-instafeed', {
            origin: 'left',
            distance: '120px',
            duration: 2000,
            delay: 220,
            easing: 'ease-in-out',
            reset: true,
          });

        const getInstaFeed = async () => {
            const token = process.env.REACT_APP_INSTA_FEED_TOKEN;
            const fields = "caption, media_url, media_type, permalink, thumbnail_url";
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
            
            try {
                const { data } = await axios.get(url);
                setFeedList(data.data);
            } catch (error) {
                console.error("Error fetching Instagram feed:", error);
            }
        };

        getInstaFeed();
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.scroll-effect-instafeed', {
            origin: 'left',
            distance: '120px',
            duration: 1500,
            delay: 220,
            easing: 'ease-in-out',
            reset: true,
          });
    }, []);

    if (data.justImages === "true") {
        return (
            <section className="container">
                {feedList
                    .filter(item => (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") && item.id !== "18291906634148908")
                    .map(imageItem => (
                        <a key={imageItem.id} href={imageItem.permalink} target="_blank" rel="noreferrer" className="item">
                            <img src={imageItem.media_url} alt={imageItem.caption} className="scroll-effect-instafeed" />
                        </a>
                    ))}
            </section>
        )
    } else {
        return (
            <section className="container">
                {feedList
                    .filter(item => item.media_type === "VIDEO")
                    .map(videoItem => (
                        <a key={videoItem.id} href={videoItem.permalink} target="_blank" rel="noreferrer" className="item">
                            <video controls>
                                <source src={videoItem.media_url}></source>
                            </video>
                        </a>
                    ))}
            </section>
        )
    }
};

export default InstaFeed;