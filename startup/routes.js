const express = require('express');
const userRouter = require("../routes/user")
const adminRouter = require("../routes/admin")
const startupRouter = require("../routes/startup")

const error = require("../middleware/error");



module.exports = function (app) {

// set cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, GET, PATCH, DELETE");
      return res.status(200).json({});
    }
  
    next();
  });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
  
    const version = '/api/v1'

    app.use(`${version}/users`, userRouter);
    app.use(`${version}/admins`, adminRouter);
    app.use(`${version}/startup`, startupRouter);


    app.get("/", (req, res, next) =>{
      res.json({status:true,message:"InsideMarket-V1 health check passed ✅"})
    })

    app.use(error);
}