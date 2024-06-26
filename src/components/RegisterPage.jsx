import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import RegisterForm from "./RegisterForm.jsx";

const RegisterPage = () => {
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
            <h2 className="recipeTitle mt-4 mb-3">Join The Plant Based Hub</h2>
            <p className="px-5 my-3 recipeBody">
              Welcome to <strong>The Plant Based Hub</strong>! By creating an account, you will gain access to a wealth
              of plant-based recipes, nutritional information, and a supportive community of like-minded individuals.
              Join us in promoting healthy, sustainable, and compassionate eating.
            </p>
          </div>
          <RegisterForm />
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
