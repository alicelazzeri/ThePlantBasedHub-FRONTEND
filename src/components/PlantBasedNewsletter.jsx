import { BsEnvelopeHeart } from "react-icons/bs";
import NewsletterForm from "./NewsletterForm";

const PlantBasedNewsletter = () => {
  return (
    <div className="newsletterContainer d-flex flex-column flex-lg-row justify-content-around align-items-start px-5 mb-3">
      <div className="mt-2 text-center text-md-start">
        <h2 className="newsletterTitle">
          <span className="plantBasedSpan">
            <BsEnvelopeHeart className="me-3" />
          </span>
          Join our newsletter
        </h2>
        <p className="newsletterBody">
          Do you want to stay updated with the latest vegan recipes, nutritional tips, and ideas to reduce food waste
          and get all this delivered straight to your inbox?
          <br />
          Join the mailing list of The Plant Based Hub and stay tuned! You will receive updates on the latest releases
          and exclusive content.
        </p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default PlantBasedNewsletter;
