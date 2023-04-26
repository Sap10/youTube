import SearchBar from "../Component/SearchBar";
import Button from "../Component/UI/Button";
import Logo from "../Images/YouTube-Logo.png";

import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {isToggle} from '../utils/slices/globalSlice';

const Header = () => {

    const dispatch = useDispatch();

    const sidebarToggleHandler = () => {
        dispatch(isToggle());
    }

    return (
        <header>
            <nav className="container mx-auto p-4">
                <div className="grid grid-cols-3">
                        <div className="flex flex-row">
                            <i className="fa-solid fa-bars p-5" onClick={sidebarToggleHandler}></i>
                            <Link to="/">
                                <img src={Logo} alt="logo" className="w-24 h-15"/>
                            </Link>
                        </div>
                    <SearchBar/>
                    <Button cName="rounded border-2 border-zinc-300 w-24 h-10 rounded-full ml-96 xl:ml-[21.6rem] mt-1.5"><i className="fa-regular fa-user"></i> Sign in </Button>
                </div>
            </nav>
        </header>
    )
}

export default Header;