import "./Blog_hero.css";
import img from "../assets/img.jpg"
import img1 from "../assets/image1.jpg"

const Blog_hero = () => {
  return (
    <>
      <div className="Blog_hero_contaner">
        <div className="Blog_hero_maxwidth">
          <div className="Blog_hero_flex">
            <div>
              <span>Food & Drink</span>
              <h1>The Pleasure of Defying Food Fashions</h1>
              <div className="profile_flex">
                <div>
                  <img src={img} />
                </div>
                <div className="profile_textaling">
                  <h5>Debanjan</h5>
                  <h6 className="profile_text">Aug 20, 1999.</h6>
                </div>
              </div>
            </div>
            <div>
              <img src={img1} style={{width:"300px", height:"300px", borderRadius:"50%",borderBottom:"10px solid #A3BFFA "}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog_hero;
