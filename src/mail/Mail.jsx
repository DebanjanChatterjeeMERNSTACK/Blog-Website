import "./Mail.css";
import send from "../assets/send.png"

const Mail = () => {
  return (
    <>
      <div className="mail_contaner">
        <div className="mail_maxwidth">
          <div className="mail_contant">
            <div>
              <h2>Subscribe to our newsletter!</h2>
              <p>
                We'll send you the best of our blog just once a month. We
                promise.
              </p>
              <input type="text" placeholder="Email Address"/>
              <p><img src={send} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mail;
