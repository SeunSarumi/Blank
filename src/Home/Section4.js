import "./Section4.css";
import HoldingCard from "../Images/HoldingCard.png";

function Section4() {
  return (
    <div className="section-4">
      <div className="container grid grid-section">
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            The Only Card You'll Ever Need
          </h1>
          <p className="text-box__header-secondary">
            Blank Card is the only payment card you will ever need, allowing you
            to shop anywhere, whether in-store or online, with ease and
            confidence.
          </p>
          <a className="text-box__btn" href="#">
            Get Now
          </a>
        </div>
        <div className="container__img-box">
          <img className="box-img-1" src={HoldingCard}></img>
        </div>
      </div>
    </div>
  );
}

export default Section4;