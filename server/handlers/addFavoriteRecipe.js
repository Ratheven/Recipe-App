const { validateUser } = require("../utils/validateUser");
const { connectDb } = require("../utils/connectDb");

const addFavoriteRecipe = async (req, res) => {
  const client = await connectDb();
  const db = client.db("data-name");
  const { name, ingredients, sub, dish } = req.body;
  console.log(dish, "hello");

  const queryObj = {
    sub,
  };
  const updateObj = {
    $push: { list: dish },
  };
  try {
    const updateResult = await db
      .collection("users")
      .updateOne(queryObj, updateObj);

    const { acknowledged, modifiedCount } = updateResult;

    console.log("helllo");
    return res.status(200).json({ message: `Added dish to user`, data: null });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: 500, message: "Error creating new user.", error: error });
  }
};

module.exports = { addFavoriteRecipe };
