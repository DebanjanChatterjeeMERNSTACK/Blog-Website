import "./category.css";
import { FcFilmReel ,FcNews ,FcGallery  ,FcNegativeDynamic } from "react-icons/fc";
const Category = () => {
  return (
    <>
      <div className="category_contaner">
        <div className="category_maxwidth">
          <div className="category_flex">
            <div className="category_card">
                <p><FcFilmReel style={{fontSize:"30px"}}/></p>
                <p>Fashion & Beauty</p>
            </div>
            <div className="category_card">
                <p><FcNegativeDynamic  style={{fontSize:"30px"}}/></p>
                <p>Fashion & Beauty</p>
            </div>
            <div className="category_card">
                <p><FcNews  style={{fontSize:"30px"}}/></p>
                <p>Fashion & Beauty</p>
            </div>
            <div className="category_card">
                <p><FcGallery  style={{fontSize:"30px"}}/></p>
                <p>Fashion & Beauty</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
