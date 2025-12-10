import express from "express";

const router = express.Router();

const DARK_MODE = process.env.DARK_MODE === 'true';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the Express Demo App', darkMode: DARK_MODE });
});

export default router;
