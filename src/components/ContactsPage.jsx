/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import wallpaper from "../assets/images/cakes.jpg";
import Image from "react-bootstrap/Image";
import ContactsForm from "./ContactsForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(stopLoading());
      AOS.init({
        duration: 2000,
        once: true,
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div
      className="text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <Image className="pageWallpaper" src={wallpaper} fluid />
          </div>
          <div className="text-center">
            <hr className="mt-0" />
            <hr />
            <h2 className="recipeTitle mt-4 mb-3">CONTACT US</h2>
            <hr />
            <hr />
            <h5 className="recipeSubtitle mb-4">
              <strong>We'd like to hear from you!</strong>
            </h5>
            <p className="m-5">
              At <strong>The Plant Based Hub</strong>, we value your feedback, questions, and suggestions. Whether
              you're looking for more information about our services, need assistance with a recipe, or simply want to
              share your thoughts, we're here to help. Please fill in the form below, and we'll get back to you as soon
              as possible.
            </p>
          </div>
          <ContactsForm />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
