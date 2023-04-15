import Sidebar from '../Component/Sidebar';
import Header from './Header';

import {useSelector} from "react-redux";
import { Outlet } from 'react-router-dom';

const Body = () => {

    const isToggle = useSelector(store => store.global);

    return (
        <>
            <Header/>
            <div className="grid grid-cols-6">
                {isToggle.isOpen && <Sidebar />}
                <Outlet  />
            </div>
        </>
    );
}

export default Body;