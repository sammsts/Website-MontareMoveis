import axios from "axios";
import { useEffect, useState } from "react";

const InstaFeed = () => {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        const getInstaFeed = async () => {
            const token = process.env.REACT_APP_INSTA_FEED_TOKEN;
            const fields = "media_url, media_type, permalink";
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
            
            try {
                const { data } = await axios.get(url);
                setFeedList(data.data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching Instagram feed:", error);
            }
        };

        getInstaFeed();
    }, []);

    return (
        <section>
            <p>INSTA FEED</p>
            <ul>
                {feedList.map((item) => (
                    <li key={item.id}>
                        <img src={item.media_url} alt="Instagram post" />
                        <a href={item.permalink}>View on Instagram</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default InstaFeed;