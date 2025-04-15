import React from "react";
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import "./Search.css";
import { NavLink } from "react-router-dom";
import Card from "../card/Card";

const Search_list = () => {
  return (
    <>
      <div className="search_contaner">
        <div className="search_maxwidth">
          <div className="search-container">
            <NavLink to={"/"}>
              <button className="back-button">
                <FiArrowLeft />
              </button>
            </NavLink>
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>
          {
            [1,2].map((e,i)=>{
                return(
                    <>
                    <Card/>
                    </>
                )
            })
          }
        </div>
      </div>
    </>
  );
};
export default Search_list;
