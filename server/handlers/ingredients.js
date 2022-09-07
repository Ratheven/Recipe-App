const { validateUser } = require("../utils/validateUser");
const { connectDb } = require("../utils/connectDb");

const ingredients = async (req, res) => {
  const client = await connectDb();
  const db = client.db("data-name");
  try {
    const { sub } = req.params;
    console.log(sub, "kokokok");

    const result = await db.collection("users").findOne({ sub: sub });

    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {}
};
module.exports = {
  ingredients,
};
