const recipes = [
  {
    id: 1,
    title: "Jollof Rice",
    description:
      "A popular West African dish made with rice, tomatoes, and spices.",
    imageUrl: require("./assets/images/jollof-rice.jpg"),
    ingredients: ["Rice", "Tomatoes", "Onions", "Pepper", "Plantain"],
    instructions:
      "Cook rice with the tomato mixture and spices, serve with Fried Plantain.",
  },
  {
    id: 2,
    title: "Stir-Fried Noodles",
    description: "Quick and tasty stir-fried noodles with vegetables.",
    imageUrl: require("./assets/images/stir-fried-noodles.jpg"),
    ingredients: ["Noodles", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir-fry noodles with vegetables, season with soy sauce.",
  },
  {
    id: 3,
    title: "Potato Salad",
    description:
      "Creamy potato salad with mayonnaise, mustard, and fresh herbs.",
    imageUrl: require("./assets/images/potato-salad.jpg"),
    ingredients: ["Potatoes", "Mayonnaise", "Mustard", "Parsley"],
    instructions: "Boil potatoes, mix with dressing, and season to taste.",
  },
  {
    id: 4,
    title: "Yam and Egg Sauce",
    description: "Boiled yam served with a flavorful egg and tomato sauce.",
    imageUrl: require("./assets/images/yam-and-egg-sauce.jpg"),
    ingredients: ["Yam", "Eggs", "Tomatoes", "Onions"],
    instructions:
      "Boil yam and prepare the egg sauce by frying tomatoes and eggs.",
  },
];

export default recipes;
