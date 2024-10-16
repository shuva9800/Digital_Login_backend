// const express = require("express");
// const app = express();
// const userRouter = require("./router/user.router");
// const taskRouter = require("./router/task.router");
// const { dbconnect } = require("./config/database");
// const cookieParser = require('cookie-parser');
// const cors = require("cors");

// require("dotenv").config();
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`app started at port ${PORT}`);
// });

// app.use(express.json());
// app.use(cookieParser());
// const allowedOrigins = ["https://user-task-create.netlify.app"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));
// //database connection
// dbconnect();

// // Routes
// app.get("/", (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: "Hello dashboard",
//   });
// });

// app.use("/api", userRouter);
// app.use("/api", taskRouter);





const express = require("express");
const app = express();
const userRouter = require("./router/user.router");
const taskRouter = require("./router/task.router");
const { dbconnect } = require("./config/database");
const cookieParser = require('cookie-parser');
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ["https://user-task-create.netlify.app"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Database connection
dbconnect();

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello dashboard",
  });
});

app.use("/api", userRouter);
app.use("/api", taskRouter);
