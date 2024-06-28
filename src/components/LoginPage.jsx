import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import LoginForm from "./LoginForm.jsx";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
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
        <div>
          <div>
            <img src={logo} className="rounded-circle mt-4" width={100} height={100} />
            <h2 className="recipeTitle mt-4 mb-3 px-5">Login to continue your Plant-Based Journey</h2>
            <p className="px-5 my-3 recipeBody">
              We are thrilled to have you back! Please log in to your account to explore our extensive collection of
              vegan recipes, get personalized meal plans, and connect with our vibrant community.
            </p>
          </div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
