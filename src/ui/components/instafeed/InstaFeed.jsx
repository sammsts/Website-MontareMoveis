import axios from "axios";
import { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';
import { Carousel } from 'primereact/carousel';

const InstaFeed = () => {
    const [feedList, setFeedList] = useState([]);
    const responsiveOptions = [
        {
          breakpoint: '991px',
          numVisible: 4,
        },
        {
          breakpoint: '767px',
          numVisible: 3,
        },
        {
          breakpoint: '575px',
          numVisible: 1,
        },
      ];

    useEffect(() => {
        const getInstaFeed = async () => {
            const token = process.env.REACT_APP_INSTA_FEED_TOKEN;
            const fields = "media_url, media_type, permalink";
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

    const itemTemplate = (item) => {
        if(item.media_type === "IMAGE"){
            return(
                <a key={item.id} href={item.permalink} target="_blank" rel="noreferrer" className="item rounded overflow-hidden transition duration-400 ease-in-out hover:brightness-130">
                    <img src={item.media_url} style={{ width: '100%' }} />
                </a>
                );
        } 
        else if (item.media_type === "CAROUSEL_ALBUM") {
            return (
                <a key={item.id} href={item.permalink} target="_blank" rel="noreferrer" className="item rounded overflow-hidden transition duration-400 ease-in-out hover:brightness-130">
                    <img src={item.media_url} style={{ width: '100%' }} />
                </a>
            );
        } 
        else {
            return(
                <a key={item.id} href={item.permalink} target="_blank" rel="noreferrer" className="item rounded overflow-hidden transition duration-400 ease-in-out hover:brightness-130">
                    <video controls className="w-full h-full">
                        <source src={item.media_url}></source>
                    </video>
                </a>
            )
        }
    };
    
    const thumbnailTemplate = (item) => {
        return <img src={item.media_url} style={{ width: '40%' }} />;
    };

    return (
        <section className="container mx-auto grid grid-cols-auto-fit gap-6 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
            <Galleria value={feedList} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
            item={itemTemplate} thumbnail={thumbnailTemplate} />
        </section>
    );
};

export default InstaFeed;