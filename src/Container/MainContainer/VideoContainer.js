import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import VideoCard from "../../Component/VideoCard";
import AdvertisementCard from "../../Component/AdvertisementCard";

const VideoContainer = () => {

    const [videos,setVideo] = useState([]);

    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(`${process.env.REACT_APP_FETCH_POPULAR_VIDEO_DATA_API_URL}` + `${process.env.REACT_APP_API_KEY}`);
        const jsonData = await data.json();
        setVideo(jsonData?.items);
    }

    return (
        <div className="grid grid-cols-3 gap-1">
            {videos.map((data,index) => {
                return (
                    <Link to={`/watch?v=${data?.id}`} key={index} >
                        <VideoCard info={data}/>
                    </Link>
                )
            })}

        </div>
    );
}

export default VideoContainer;