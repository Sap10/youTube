import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import {formatCash, dateCalculation} from "../utils/functions";

const VideoCard = ({info}) => {

    useEffect(() => {
        getLogo(info?.snippet?.channelId);
    },[]);

    const [channelThumbnail, setChannelThumbnail] = useState('');

    if(!info) return null;

    const getLogo = async id => {
        const data = await fetch(`${process.env.REACT_APP_FETCH_CHANNEL_INFO_API_URL}` + `${id}`);
        const jsonData = await data.json();
        setChannelThumbnail(jsonData?.items[0]?.snippet?.thumbnails?.default?.url);
    }

    return (

            <div className="w-96 p-2 mx-auto xl:w-[22rem]">
                <img
                    src={info?.snippet?.thumbnails?.medium?.url}
                    className="h-52 rounded-lg" />
                <div className="py-3 flex">
                    <img src={channelThumbnail} className="w-9 h-9 rounded-full" />
                    <div>
                        <h3 className="line-clamp-2 pl-2 pr-6 font-bold">{info?.snippet?.localized?.title}</h3>
                        <p className="pl-2 pt-1 text-gray-500">{info?.snippet?.channelTitle}</p>
                        <span className="text-gray-500 pl-2">{formatCash(info?.statistics?.viewCount)} views • {dateCalculation(info?.snippet?.publishedAt)} ago</span>
                    </div>
                </div>
            </div>

    );
}

export const AdvertisementCard = ({info}) => {
    return(
        <div className="text-red-500 border-4 border-red-500">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;