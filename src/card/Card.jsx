
import img from "../assets/image.jpg";

const Card = () => {
  return (
    <>
     
      <div className="suggested_contaner">
        <div className="suggested_maxwidth">
          <div className="suggested_flex">
            <div className="card">
              <div>
                <img src={img} className="card_image" />
              </div>
              <span>Fashion & Beauty</span>
              <h3>This US States Test Doesn't End Until</h3>
              <p>
                Primo in altis pelle alumnae Lorem markdownum obvius in seque
                opus, est bicorni forte; laeva…
              </p>
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
            <div className="card">
              <div>
                <img src={img} className="card_image" />
              </div>
              <span>Fashion & Beauty</span>
              <h3>This US States Test Doesn't End Until</h3>
              <p>
                Primo in altis pelle alumnae Lorem markdownum obvius in seque
                opus, est bicorni forte; laeva…
              </p>
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
            <div className="card">
              <div>
                <img src={img} className="card_image" />
              </div>
              <span>Fashion & Beauty</span>
              <h3>This US States Test Doesn't End Until</h3>
              <p>
                Primo in altis pelle alumnae Lorem markdownum obvius in seque
                opus, est bicorni forte; laeva…
              </p>
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
          </div>
        </div>
      </div>

      
    </>
  );
};
export default Card;
