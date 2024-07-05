import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, Button, Card, Badge, Image, Offcanvas } from "react-bootstrap";
import wallpaper from "../assets/images/soup.jpg";
import {
  fetchAllRecipes,
  fetchRecipesByRecipeName,
  fetchRecipesByIngredientName,
  fetchRecipesByTotalProteins,
  fetchRecipesByTotalCarbohydrates,
  fetchRecipesByTotalFats,
  fetchRecipesByTotalFibers,
  fetchRecipesByTotalSugars,
  fetchRecipesByTotalVitamins,
  fetchRecipesByTotalMinerals,
} from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import { CiBookmarkPlus } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const RecipesPageAuth = () => {
  const dispatch = useDispatch();
  const { recipes, isLoading } = useSelector(state => state.recipes);
  const [filter, setFilter] = useState("");
  const [expandedRecipes, setExpandedRecipes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [ingredientBadges, setIngredientBadges] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [vitaminBadges, setVitaminBadges] = useState([]);
  const [vitaminInput, setVitaminInput] = useState("");
  const [mineralBadges, setMineralBadges] = useState([]);
  const [mineralInput, setMineralInput] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [proteinRange, setProteinRange] = useState({ min: 0, max: 100 });
  const [carbohydrateRange, setCarbohydrateRange] = useState({ min: 0, max: 100 });
  const [fatRange, setFatRange] = useState({ min: 0, max: 100 });
  const [fiberRange, setFiberRange] = useState({ min: 0, max: 100 });
  const [sugarRange, setSugarRange] = useState({ min: 0, max: 100 });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllRecipes());

    setTimeout(() => {
      AOS.init({
        duration: 2000,
        once: true,
      });
    }, 2000);
  }, [dispatch]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleRangeChange = setter => event => {
    const { name, value } = event.target;
    setter(prevState => ({ ...prevState, [name]: Number(value) }));
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = event => {
    setSearchType(event.target.value);
  };

  const handleIngredientInputChange = event => {
    setIngredientInput(event.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      setIngredientBadges([...ingredientBadges, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  const handleRemoveIngredient = ingredient => {
    setIngredientBadges(ingredientBadges.filter(item => item !== ingredient));
  };

  const handleVitaminInputChange = event => {
    setVitaminInput(event.target.value);
  };

  const handleAddVitamin = () => {
    if (vitaminInput.trim()) {
      setVitaminBadges([...vitaminBadges, vitaminInput.trim()]);
      setVitaminInput("");
    }
  };

  const handleRemoveVitamin = vitamin => {
    setVitaminBadges(vitaminBadges.filter(item => item !== vitamin));
  };

  const handleMineralInputChange = event => {
    setMineralInput(event.target.value);
  };

  const handleAddMineral = () => {
    if (mineralInput.trim()) {
      setMineralBadges([...mineralBadges, mineralInput.trim()]);
      setMineralInput("");
    }
  };

  const handleRemoveMineral = mineral => {
    setMineralBadges(mineralBadges.filter(item => item !== mineral));
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchType === "name") {
      dispatch(fetchRecipesByRecipeName(searchTerm));
    } else {
      dispatch(fetchRecipesByIngredientName(ingredientBadges));
    }
  };

  const toggleText = id => {
    setExpandedRecipes(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAdvancedFilterSubmit = () => {
    dispatch(fetchRecipesByTotalProteins(proteinRange.min, proteinRange.max));
    dispatch(fetchRecipesByTotalCarbohydrates(carbohydrateRange.min, carbohydrateRange.max));
    dispatch(fetchRecipesByTotalFats(fatRange.min, fatRange.max));
    dispatch(fetchRecipesByTotalFibers(fiberRange.min, fiberRange.max));
    dispatch(fetchRecipesByTotalSugars(sugarRange.min, sugarRange.max));
    dispatch(fetchRecipesByTotalVitamins(vitaminBadges));
    dispatch(fetchRecipesByTotalMinerals(mineralBadges));
    setShowOffcanvas(false);
  };

  const filteredRecipes = recipes.filter(recipe => recipe.recipeCategory.toLowerCase().includes(filter.toLowerCase()));

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleViewRecipeClick = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="text-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <Image className="pageWallpaper" src={wallpaper} fluid />
          </div>
          <div>
            <h2 className="recipeTitle mt-4 mb-3">OUR RECIPES</h2>
            <h5 className="recipeSubtitle mb-4">
              <strong>Discover a world of delicious Vegan Recipes</strong>
            </h5>
          </div>
          <div className="px-5 mb-5">
            <Form className="formContainer">
              <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="recipeFilter">
                    <Form.Control className="recipeFilter" as="select" value={filter} onChange={handleFilterChange}>
                      <option value="">All Categories</option>
                      <option value="BREAKFAST">Breakfast</option>
                      <option value="LUNCH">Lunch</option>
                      <option value="DINNER">Dinner</option>
                      <option value="DESSERT">Dessert</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form className="mb-4 formContainer" onSubmit={handleSearchSubmit}>
              <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="searchType">
                    <Form.Control
                      className="recipeFilter"
                      as="select"
                      value={searchType}
                      onChange={handleSearchTypeChange}
                    >
                      <option value="name">Search by Recipe Name</option>
                      <option value="ingredients">Search by Ingredients</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                  {searchType === "name" ? (
                    <Form.Group className="recipeFilter d-flex justify-content-center" controlId="searchRecipe">
                      <Form.Control
                        type="text"
                        placeholder="Search by recipe name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button className="inputBtn" type="submit">
                        <BsSearch className="inputIcon" />
                      </button>
                    </Form.Group>
                  ) : (
                    <Form.Group className="recipeFilter d-flex justify-content-center" controlId="searchIngredients">
                      <Form.Control
                        type="text"
                        placeholder="Add an ingredient"
                        value={ingredientInput}
                        onChange={handleIngredientInputChange}
                        onKeyPress={event => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            handleAddIngredient();
                          }
                        }}
                      />
                      <button className="inputBtn" onClick={handleAddIngredient}>
                        <CiBookmarkPlus className="inputIcon" />
                      </button>
                      <button className="inputBtn" type="submit">
                        <BsSearch className="inputIcon" />
                      </button>
                    </Form.Group>
                  )}
                  {searchType === "ingredients" && (
                    <div className="mt-2">
                      {ingredientBadges.map(ingredient => (
                        <Badge
                          key={ingredient}
                          pill
                          className="me-2 ingredientBadge"
                          onClick={() => handleRemoveIngredient(ingredient)}
                        >
                          {ingredient} <span aria-hidden="true">&times;</span>
                        </Badge>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
            </Form>
            <Button className="filtersBtn mb-4" onClick={handleOffcanvasToggle}>
              Advanced Filters
            </Button>
            <hr />
            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
              <Offcanvas.Header closeButton className="offcanvas-header">
                <Offcanvas.Title className="offcanvas-title">Advanced Filters</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Form className="mb-4">
                  <Row>
                    <Col>
                      <Form.Group controlId="proteinRange">
                        <Form.Label className="filterLabel">
                          Proteins: {proteinRange.min} - {proteinRange.max}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Range
                              name="min"
                              min={0}
                              max={100}
                              value={proteinRange.min}
                              onChange={handleRangeChange(setProteinRange, "min")}
                              className="range-input"
                            />
                          </Col>
                          <Col>
                            <Form.Range
                              name="max"
                              min={0}
                              max={100}
                              value={proteinRange.max}
                              onChange={handleRangeChange(setProteinRange, "max")}
                              className="range-input"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="carbohydrateRange">
                        <Form.Label className="filterLabel">
                          Carbohydrates: {carbohydrateRange.min} - {carbohydrateRange.max}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Range
                              name="min"
                              min={0}
                              max={100}
                              value={carbohydrateRange.min}
                              onChange={handleRangeChange(setCarbohydrateRange, "min")}
                              className="range-input"
                            />
                          </Col>
                          <Col>
                            <Form.Range
                              name="max"
                              min={0}
                              max={100}
                              value={carbohydrateRange.max}
                              onChange={handleRangeChange(setCarbohydrateRange, "max")}
                              className="range-input"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="fatRange">
                        <Form.Label className="filterLabel">
                          Fats: {fatRange.min} - {fatRange.max}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Range
                              name="min"
                              min={0}
                              max={100}
                              value={fatRange.min}
                              onChange={handleRangeChange(setFatRange, "min")}
                              className="range-input"
                            />
                          </Col>
                          <Col>
                            <Form.Range
                              name="max"
                              min={0}
                              max={100}
                              value={fatRange.max}
                              onChange={handleRangeChange(setFatRange, "max")}
                              className="range-input"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="fiberRange">
                        <Form.Label className="filterLabel">
                          Fibers: {fiberRange.min} - {fiberRange.max}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Range
                              name="min"
                              min={0}
                              max={100}
                              value={fiberRange.min}
                              onChange={handleRangeChange(setFiberRange, "min")}
                              className="range-input"
                            />
                          </Col>
                          <Col>
                            <Form.Range
                              name="max"
                              min={0}
                              max={100}
                              value={fiberRange.max}
                              onChange={handleRangeChange(setFiberRange, "max")}
                              className="range-input"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="sugarRange">
                        <Form.Label className="filterLabel">
                          Sugars: {sugarRange.min} - {sugarRange.max}
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Range
                              name="min"
                              min={0}
                              max={100}
                              value={sugarRange.min}
                              onChange={handleRangeChange(setSugarRange, "min")}
                              className="range-input"
                            />
                          </Col>
                          <Col>
                            <Form.Range
                              name="max"
                              min={0}
                              max={100}
                              value={sugarRange.max}
                              onChange={handleRangeChange(setSugarRange, "max")}
                              className="range-input"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="vitaminInput">
                        <Form.Label className="filterLabel">Add Vitamin</Form.Label>
                        <div className="d-flex justify-content-center">
                          <Form.Control
                            className="filterLabel"
                            type="text"
                            placeholder="Add a vitamin"
                            value={vitaminInput}
                            onChange={handleVitaminInputChange}
                            onKeyPress={event => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                handleAddVitamin();
                              }
                            }}
                          />
                          <button className="inputBtn" onClick={handleAddVitamin}>
                            <CiBookmarkPlus className="inputIcon" />
                          </button>
                        </div>
                      </Form.Group>
                      <div className="mt-2">
                        {vitaminBadges.map(vitamin => (
                          <Badge
                            key={vitamin}
                            pill
                            className="me-2 ingredientBadge"
                            onClick={() => handleRemoveVitamin(vitamin)}
                          >
                            {vitamin} <span aria-hidden="true">&times;</span>
                          </Badge>
                        ))}
                      </div>
                    </Col>
                    <Col>
                      <Form.Group controlId="mineralInput">
                        <Form.Label className="filterLabel">Add Mineral</Form.Label>
                        <div className="d-flex justify-content-center">
                          <Form.Control
                            className="filterLabel"
                            type="text"
                            placeholder="Add a mineral"
                            value={mineralInput}
                            onChange={handleMineralInputChange}
                            onKeyPress={event => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                handleAddMineral();
                              }
                            }}
                          />
                          <button className="inputBtn" onClick={handleAddMineral}>
                            <CiBookmarkPlus className="inputIcon" />
                          </button>
                        </div>
                      </Form.Group>
                      <div className="mt-2">
                        {mineralBadges.map(mineral => (
                          <Badge
                            key={mineral}
                            pill
                            className="me-2 ingredientBadge"
                            onClick={() => handleRemoveMineral(mineral)}
                          >
                            {mineral} <span aria-hidden="true">&times;</span>
                          </Badge>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Button onClick={handleAdvancedFilterSubmit} className="filtersBtn mt-2">
                    Apply Filters
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
            <Row>
              {filteredRecipes.map(recipe => (
                <Col xs={12} md={6} lg={4} key={recipe.id} className="mb-4">
                  <Card className="h-100 recipeCard">
                    <Card.Img className="recipeCardImg" variant="top" src={recipe.imageUrl} width={400} height={400} />
                    <Card.Body>
                      <Card.Title>{recipe.recipeName}</Card.Title>
                      <Card.Text
                        className={`carouselBody ${expandedRecipes[recipe.id] ? "" : "text-truncate"}`}
                        style={{ maxHeight: expandedRecipes[recipe.id] ? "none" : "3em" }}
                      >
                        {recipe.recipeDescription}
                      </Card.Text>
                      <p>
                        <Badge onClick={() => toggleText(recipe.id)} className="readMore">
                          {expandedRecipes[recipe.id] ? "Read less" : "Read more"}
                        </Badge>
                      </p>
                      <Button className="viewRecipeBtn" onClick={() => handleViewRecipeClick(recipe.id)}>
                        View Recipe
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipesPageAuth;
