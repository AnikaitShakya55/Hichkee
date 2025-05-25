import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./AvailableMeals.module.css";
import CartContext from "../../Store/CartContext";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    image:
      "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdneCVWGXo8Ac8ZRQqjin4hl-yCja-5EnZg&usqp=CAU",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    image:
      "https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlCUOWCWZ-M17dYfL0X2x8_E1Hl4buzdZPh5KlXYxcw&s",
  },
  {
    id: "m5",
    name: "Bakingo",
    description: "Bakery, Desserts",
    price: 14.6,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/18416840/05994df0e49725bd230146c320b8f7aa.jpg",
  },
  {
    id: "m6",
    name: "Roms Pizza",
    description: "Pizza, Burger, Fast Food, Shake, Beverages",
    price: 19.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vra-cmmkL9bi8bKQDNLhJtkHyAn3kb-ncu8nv8OM1g&s",
  },
  {
    id: "m7",
    name: "Theobroma",
    description: "Bakery, Desserts",
    price: 20.4,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/6/18384116/f3b7df2138b3cbdb052e92aad112a139_o2_featured_v2.jpg",
  },
  {
    id: "m8",
    name: "The Belgian Waffle",
    description: "Waffle, Pancake, Ice Cream, Desserts, Beverages",
    price: 12.7,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/18618283/c917709553428929e7902af37d9b8a8b.jpg",
  },
  {
    id: "m9",
    name: "Paneer Butter Masala",
    description: "North Indian, creamy and rich",
    price: 15.99,
    image:
      "https://homecookingcollective.com/wp-content/uploads/2024/01/Butter_Paneer_LEAD_1-2-2.jpg",
  },
  {
    id: "m11",
    name: "Veg Manchurian",
    description: "Indo-Chinese fried veggie balls",
    price: 10.49,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarSxTLDn8swVw8vKs60AmBIx90dxhFMQbrA&s",
  },
  {
    id: "m12",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with mozzarella & basil",
    price: 11.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEmCZ-fPKl2_wv9kxeB5hH4MHEen3oxnWOw&s",
  },
  {
    id: "m13",
    name: "Falafel Wrap",
    description: "Mediterranean vegan wrap",
    price: 9.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLuq2arQFjeffz51dafAU7s_E2eF8vOvy2w&s",
  },
  {
    id: "m15",
    name: "Mango Lassi",
    description: "Sweet mango yogurt drink",
    price: 4.75,
    image:
      "https://realfood.tesco.com/media/images/Mango-lassi-syllabub-LGH-005f53f6-0e6a-4ced-919f-0ca3fad28b3b-0-1400x919.jpg",
  },
  {
    id: "m16",
    name: "Street Style Momos",
    description: "Steamed dumplings with spicy chutney",
    price: 8.5,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaikh.khalid7-gmail.com/Chicken_Momos_Recipe_Delicious_Steamed_Chicken_Dumplings_400.jpg",
  },
  {
    id: "m17",
    name: "Gulab Jamun",
    description: "Fried dumplings in cardamom syrup",
    price: 6.49,
    image: "https://zeelskitchen.com/wp-content/uploads/2014/10/gulabjambu.jpg",
  },
  {
    id: "m18",
    name: "Iced Coffee",
    description: "Chilled milk coffee, lightly sweetened",
    price: 5.25,
    image:
      "https://img.taste.com.au/UHFv39Ks/taste/2020/05/jun20_vietnamese-iced-coffee-161761-1.jpg",
  },
  {
    id: "m19",
    name: "Avocado Salad",
    description: "Fresh salad with creamy avocado and nuts",
    price: 9.3,
    image:
      "https://www.allrecipes.com/thmb/OrtJTuzMCKTXe2wiZKFcR4wWDuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19960-avocado-salad-VAT-001-4x3-64241afdc3b04d00a9372e1573eac6f7.jpg",
  },
  {
    id: "m20",
    name: "Masala Dosa",
    description: "South Indian crispy crepe with potato stuffing",
    price: 10.0,
    image:
      "https://images.squarespace-cdn.com/content/v1/5ec30182cff13b4331c5384d/1667401388455-FA4B07WUNGGW0K4ED2CF/IMG_4936.jpeg?format=1000w",
  },
];

const AvailableMeal = () => {
  const ctx = useContext(CartContext);
  const [filters, setFilters] = useState({
    cuisine: "",
    maxPrice: 50,
    sort: "asc",
  });

  const [quantityMap, setQuantityMap] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantityMap((prev) => ({ ...prev, [id]: parseInt(value) }));
  };

  const handleAddToCart = (meal) => {
    const quantity = quantityMap[meal.id] || 0;
    if (quantity > 0) {
      ctx.addItem({ ...meal, quantity });
    }
  };

  const filteredMeals = DUMMY_MEALS.filter(
    (meal) =>
      (!filters.cuisine ||
        meal.description
          .toLowerCase()
          .includes(filters.cuisine.toLowerCase())) &&
      meal.price <= filters.maxPrice
  ).sort((a, b) =>
    filters.sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className={classes.container}>
      {/* Sidebar */}
      <div className={classes.sidebar}>
        <h4>Filter Meals</h4>

        <div className={classes.filterGroup}>
          <label>Cuisine</label>
          <input
            type="text"
            placeholder="e.g. sushi, burger"
            value={filters.cuisine}
            onChange={(e) =>
              setFilters({ ...filters, cuisine: e.target.value })
            }
          />
        </div>

        <div className={classes.filterGroup}>
          <label>Max Price</label>
          <input
            type="range"
            min="0"
            max="50"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
          <p>Up to ${filters.maxPrice}</p>
        </div>

        <div className={classes.filterGroup}>
          <label>Sort By Price</label>
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <Button
          variant="outline-secondary"
          onClick={() => setFilters({ cuisine: "", maxPrice: 50, sort: "asc" })}
        >
          Clear Filters
        </Button>
      </div>

      {/* Main Section */}
      <div className={classes.mainContent}>
        <div className={classes.headingContainer}>
          <h2 className={classes.heading}>Available Meals</h2>
          <p className={classes.subHeading}>
            Explore our delicious selection of meals
          </p>
        </div>

        <div className={classes.mealRow}>
          {filteredMeals.map((meal) => (
            <Card key={meal.id} className={classes.Card}>
              <Card.Img
                variant="top"
                src={meal.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>
                  {meal.name} - ${meal.price.toFixed(2)}
                </Card.Title>
                <Card.Text>{meal.description}</Card.Text>
                <label>Qty:</label>
                <input
                  className={classes.input}
                  type="number"
                  min="0"
                  max="5"
                  value={quantityMap[meal.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(meal.id, e.target.value)
                  }
                />
                <br />
                <Button
                  variant="outline-danger"
                  onClick={() => handleAddToCart(meal)}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableMeal;
