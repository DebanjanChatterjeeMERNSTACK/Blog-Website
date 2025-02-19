import "./Contact_form.css";
import img1 from "../assets/contact.jpg";

const Contact_form = () => {
  return (
    <>
      <div className="Contact_contanar">
        <div className="Contact_maxwidth">
          <div className="Contact_flex">
            <div>
              <h1>Let's Connect</h1>
              <p>
                FlexiBlog theme comes with a pre-made contact form component.
                You can integrate this form with serverless services such as
                Formspree, Getform, FormKeep and others to receive form
                submissions via email.
              </p>
            </div>
            <div>
              <img
                src={img1}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  borderBottom: "10px solid #A3BFFA ",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="con_form">
        <div className="con_form_maxwidth">
          <div className="con_form_flex">
            <div className="input_flex">
              <div>
                <p>Full Name</p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <p>Email Id</p>
                <input type="email" placeholder="test@gmail.com" />
              </div>
              <div>
                <p>Phone No.</p>
                <input type="text" placeholder="Ph. No." />
              </div>
            </div>
            <div className="contact_area">
              <textarea rows="7"  placeholder="Message here....."></textarea>
              <button className="button2"> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact_form;
