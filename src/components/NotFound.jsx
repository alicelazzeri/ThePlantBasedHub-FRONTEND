import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import logo from "../assets/images/logo.png";
import HomeButton from "./HomeButton";

const NotFound = () => {
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
      className="notFoundContainer text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img src={logo} width={200} alt="Logo" className="notFoundLogo rounded-circle my-5" />
          <h1 className="notFoundTitle mt-1">404 &ndash; Page not found</h1>
          <p className="notFoundBody mx-5 my-5 text-center">
            We are sorry, but the page you were looking for does not seem to exist. Try searching for another page or go
            back to the homepage.
          </p>
          <HomeButton />
        </>
      )}
    </div>
  );
};

export default NotFound;
