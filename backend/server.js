const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const secretKey = "mysecretkey";
const authentificateJWT = require("./middleware");

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1sevinc2",
    database: "FoodDelivery",
    port: 5432,
  },
});
app.use("db", db);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const path = require("path");
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});



app.use(cors());

app.get("/checkout", authentificateJWT, (req, res) => {
  console.log("user", req.user);
  res.json("api isleyir");
});

app.get("/restaurants", function (req, res) {
  db("restaurants")
    .select("*")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving data" });
    });
});
app.get("/restaurants/:rest_id", async (req, res) => {
  const rest_id = req.params.rest_id;
  try {
    const categ = await db("category")
      .select("*")
      .where("restaurant_id", rest_id);
    const categId = categ.map((item) => {
      return item.id;
    });

    const menu = await db("menu_item")
      .select("*")
      .whereIn("category_id", categId);

    const responseData = {
      categories: categ,
      menuItems: menu,
    };
    res.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const body = req.body;
    let newUser;
    await db("users")
      .select("email")
      .where({ email: body.email })
      .then((result) => {
        if (result.length > 0) {
          return res
            .status(401)
            .json({ message: "This email is already exists" });
        } else {
          newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            username: body.username,
            email: body.email,
            password: "",
          };
          return bcrypt.hash(body.password, 10);
        }
      })
      .then((hashedPassword) => {
        newUser.password = hashedPassword;
        return db("users")
          .insert(newUser)
          .returning([
            "firstname",
            "lastname",
            "username",
            "email",
            "password",
          ]);
      })
      .then((insertedUser) => {
        const createdUser = insertedUser[0];
        const token = jwt.sign(
          {
            firstname: createdUser.firstname,
            lastname: createdUser.lastname,
            username: createdUser.username,
            email: createdUser.email,
          },
          secretKey,
          {
            expiresIn: "2h",
          }
        );
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
          message: "User successfully created",success: true,
          user: {
            firstname: createdUser.firstname,
            lastname: createdUser.lastname,
            username: createdUser.username,
            email: createdUser.email,
          },
        });
      });
  } catch (error) {
    console.error("Error during signup: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const body = req.body;
    const user = await db("users")
      .select("*")
      .where({ email: body.email })
      .first();
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }
    const matchPass = await bcrypt.compare(body.password, user.password);

    if (!matchPass) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }
    const token = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: "2h",
    });

    res
      .status(200)
      .json({ message: "Login successful", success: true, token: token });
  } catch (error) {
    console.error("Error during signup: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/', async(req, res)=>{
  try{
    const restaurants = db('restaurants').select('*');
    const category = db('category').select('*');
    const menu_item = db('menu_item').select('*');

    const [restaurantsData, categoryData, foodData] =
     await Promise.all([restaurants,category,menu_item]);

     res.json({restaurants: restaurantsData, category: categoryData, menu_item: foodData})
  } catch(err) {
        res.status(500).json({error: "An error occurred while retrieving data"})
  }
})

app.post('/checkout', async (req, res)=>{
  try{
    const orderedItem = req.body.orders;
 
    const itemDetails = orderedItem.map(async(item)=>{
      const orderName = item.name;
      const orderQuantity = item.itemAmount;
      const totalAmount = item.price * item.itemAmount

      await db('orders')
      .insert({
        order_name: orderName,
        order_quantity: orderQuantity,
        total_amount: totalAmount
      });
      })
      res.status(201).json({message:'Order successful', success: true});
  }
  catch (error) {
    console.error('Error handling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(3500, () => {
  console.log("3500 port hazirdir");
});


const path = require("path");
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});