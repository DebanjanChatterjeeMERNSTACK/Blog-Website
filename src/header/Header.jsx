import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.jpg"
import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="header_contaner">
            <div className="header_maxwidth">
               <div className="header_flex">
                <div className="">
                     <img src={logo} />
                </div>
                <div className="search_flex">
                    <div><IoMdSearch style={{ fontSize:"25px",color:"#718096",paddingTop:"4px" }}/></div>
                    <p>Discover news, artical and more</p>
                </div>
                <div className="menu_flex">
                    <NavLink to={"/"}><p>Home</p></NavLink>
                    <NavLink to={"/blog"}><p>Blog</p></NavLink>
                    <NavLink to={"/contact"}><p>Contact</p></NavLink>

                </div>

               </div>
            </div>
        </div>
        </>
    )
}
export default Header;