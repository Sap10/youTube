import {React,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import {closeSidebar} from '../utils/slices/globalSlice';

const Watch = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();

    const param = searchParam.get("v");

    useEffect(()=>{
        dispatch(closeSidebar());
    },[]);

    return(
        <div className='px-16'>
            <iframe
                width="956"
                height="538"
                src={"https://www.youtube.com/embed/" + param}
                title="Bhuvan Bam Reveals About His Love Interest | The Kapil Sharma Show | Sat- Sun At 9:30 PM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )

}

export default Watch;