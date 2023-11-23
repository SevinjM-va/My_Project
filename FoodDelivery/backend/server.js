const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const secretKey = "mysecretkey";

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
app.use(cors());

app.get("/", function (req, res) {
  res.send("api isleyir");
});

app.get("/restaurants", function (req, res) {
  db("restaurants")
    .select("name")
    .then((result) => {
        res.send({ result });
    });
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

        res.status(200).json({
          message: "User successfully created",
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
    res.status(200).json({ message: "Login successful", user: user });
  } catch (error) {
    console.error("Error during signup: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3500, () => {
  console.log("3500 port hazirdir");
});
