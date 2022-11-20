import './styles.css';
import { Link } from 'react-router-dom';
import {HiChat} from '@react-icons/all-files/hi/HiChat'

function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/" className="logo-text">Macarrão Divino</Link>
            <button onClick={()=> window.location.href='http://localhost:3000'} ><HiChat/></button>
        </nav>
    );
};


export default Navbar;
