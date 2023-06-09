import Nav from "../Home/Nav";
import "./Info.css";
import Map from "../Images/map.svg";
import Call from "../Images/Call.svg";
import Mail from "../Images/Email.svg";

function Info() {
  return (
    <div className="Info">
      <Nav></Nav>
      <div className="Info-box">
        <div className="icon-container">
          <div className="icon-box box-icon-info">
            <img src={Map}></img>
            <h2 className="icon-box-heading">Address</h2>
            <p className="icon-box-p">5 Adedeji Street Ogba, Lagos,Nigeria</p>
          </div>
          <div className="icon-box">
            <img src={Call}></img>
            <h2 className="icon-box-heading">Contact</h2>
            <p className="icon-box-p">+234 8123 238 980</p>
          </div>
          <div className="icon-box">
            <img src={Mail}></img>
            <h2 className="icon-box-heading">Email</h2>
            <p className="icon-box-p">support@blank.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
