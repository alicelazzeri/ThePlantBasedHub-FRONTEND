/* eslint-disable react/no-unescaped-entities */
import Image from "react-bootstrap/Image";
import wallpaper from "../assets/images/plantbased.jpg";

const AboutPage = () => {
  return (
    <div
      className="text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div>
        <Image className="pageWallpaper" src={wallpaper} fluid />
      </div>
      <hr className="mt-0" />
      <hr />
      <h2 className="recipeTitle about mt-4 mb-3">ABOUT THE PLANT BASED HUB</h2>
      <hr />
      <hr />
      <div className="text-start m-5">
        <h3 className="aboutTitle">Our Story</h3>
        <p>
          <strong>The Plant Based Hub</strong> was born out of a passion for <strong>healthy eating</strong>,{" "}
          <strong>sustainability</strong>, and <strong>compassion for all living beings</strong>. Our journey began when
          a group of enthusiastic vegans realized the need for a comprehensive platform that could make plant-based
          living easier and more enjoyable. With diverse backgrounds in nutrition, culinary arts, and technology, our
          team came together to create a resource that could transform the way people approach plant-based diets.
        </p>
      </div>
      <div className="text-end m-5">
        <h3 className="aboutTitle">Our Mission</h3>
        <p>
          At <strong>The Plant Based Hub</strong>, our mission is to inspire and empower individuals to adopt a
          plant-based lifestyle that benefits their <strong>health</strong>, the <strong>environment</strong>, and{" "}
          <strong>animal welfare</strong>. We aim to provide the tools, resources, and community support necessary for
          everyone, from beginners to seasoned vegans, to thrive on a plant-based diet.
        </p>
      </div>
      <div className="text-start m-5">
        <h3 className="aboutTitle">Our Vision</h3>
        <p>
          We envision a world where plant-based eating is mainstream and accessible to all. A world where the majority
          of people choose plant-based foods for their <strong>health benefits</strong>,{" "}
          <strong>minimal environmental impact</strong>, and <strong>ethical considerations</strong>. By making
          plant-based living easy and enjoyable, we strive to create a healthier, more sustainable, and compassionate
          world.
        </p>
      </div>
      <div className="text-end m-5">
        <h3 className="aboutTitle">What We Offer</h3>
        <p>
          <strong>The Plant Based Hub</strong> offers a comprehensive recipe database where you can explore a wide
          variety of vegan recipes, from quick and easy meals to gourmet dishes, each crafted to be delicious and
          nutritionally balanced. We provide detailed nutritional information for each ingredient and recipe, helping
          you make informed choices to meet your dietary needs. Our smart tools include a{" "}
          <strong>recipe search feature</strong> that allows you to find meals based on the ingredients you have, and
          <strong>filter recipes by nutritional content</strong> to create balanced meals tailored to your dietary
          goals. We also simplify your grocery shopping with <strong>automated shopping lists</strong> that ensure you
          have all the ingredients needed for your chosen recipes. Moreover, <strong>The Plant Based Hub</strong> is a
          vibrant community of plant-based enthusiasts, where you can share your favorite recipes, exchange tips, and
          find inspiration from others on the same journey.
        </p>
      </div>
      <div className="text-start m-5">
        <h3 className="aboutTitle">Why Plant-Based?</h3>
        <p>
          A plant-based diet offers numerous health benefits, including <strong>improved heart health</strong>,{" "}
          <strong>better weight management</strong>, <strong>enhanced digestion</strong>, and a{" "}
          <strong>higher intake of essential nutrients</strong>. Environmentally, plant-based diets have a lower carbon
          footprint, conserve water, and reduce deforestation and habitat loss. Ethically, choosing plant-based foods
          supports animal welfare and reduces the demand for factory farming.
        </p>
      </div>
      <div className="text-end m-5">
        <h3 className="aboutTitle">Our Journey</h3>
        <p>
          Since our inception, The Plant Based Hub has grown into a{" "}
          <strong>trusted resource for plant-based living</strong>. Our team continuously updates the platform with new
          recipes, nutritional information, and features to meet the evolving needs of our users. We are committed to
          fostering a supportive community where everyone can share their experiences and learn from each other.
        </p>
      </div>
      <div className="text-start m-5">
        <h3 className="aboutTitle">Join Us</h3>
        <p>
          We invite you to join The Plant Based Hub and become part of a movement towards a <strong>healthier</strong>,{" "}
          <strong>more sustainable</strong>, and <strong>compassionate lifestyle</strong>. Whether you are just starting
          out or are looking to expand your plant-based repertoire, our platform is here to support you every step of
          the way.
        </p>
      </div>
      <hr />
      <div className="text-center m-5">
        <span className="plantBasedSpan thankYouSpan">
          💚 Thank you for being a part of The Plant Based Hub community 💚
        </span>
        <br />
        <br />
        <p>
          Together, we can make a positive difference in our own lives, the environment, and the lives of animals.
          <br />
          Let's embark on this journey and explore the endless possibilities of plant-based cuisine.
          <br />
          Start your journey today and transform the way you cook and eat!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
