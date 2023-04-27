import "./Section2.css";
import Wallet from "../Images/Wallet.png";
import Floating from "../Images/floating-card.png";

function Section2() {
  return (
    <div className="section-2">
      <div className="container grid grid--2-cols">
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            Say Goodbye to Wallet Clutter with Blank Card
          </h1>
          <p className="text-box__header-secondary">
            Blank Card simplifies your payment life by letting you manage all
            your payment cards in one place, freeing you from the burden of
            carrying multiple cards.
          </p>
          <a className="text-box__btn" href="#">
            Start Now
          </a>
        </div>
        <div className="container__img-box">
          <img className="box-img-1" src={Wallet}></img>
        </div>
        <div className="container__img-box">
          <img className="box-img-2" src={Floating}></img>
        </div>
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            The All-In-One Card Solution
          </h1>
          <p className="text-box__header-secondary">
            Blank Card is a one-stop-shop for all your payment needs, letting
            you link and unlink your cards with just a few clicks, making it
            easy to switch between different payment methods as you need them.
          </p>
          <a className="text-box__btn" href="#">
            Get Onboard
          </a>
        </div>
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            The Future of Payments Is Here with Blank Card
          </h1>
          <p className="text-box__header-secondary">
            Blank Card is the future of payments, providing a secure,
            convenient, and customizable way to manage all your payment cards.
            Add all your cards and enjoy a truly limitless experience.
          </p>
          <a className="text-box__btn" href="#">
            See More
          </a>
        </div>
        <div className="container__img-box">
          <img className="box-img-2" src={Floating}></img>
        </div>
      </div>
    </div>
  );
}

export default Section2;
