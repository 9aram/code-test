const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Board = require('../models/Board.js');
var app = express();
var multer = require('multer');
const bodyParser = require('body-parser')

const DIR = './uploads';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
*/

app.use('/user', express.static('upload/'));
// API ROOT ROUTE
router.get('/', (req, res) => {
    res.status(200).json({ status: 200, result: 'success' });
});

// GET ALL BoardS
router.get('/Board', (req, res, next) => {
    Board.find((err, products) => (err) ? next(err) : res.json(products));
});

// GET A Board
router.get('/board/:id', (req, res, next) => {
    Board.findById(req.params.id, (err, post) => (err) ? next(err) : res.json(post));
});

// CREATE A Board
router.post('/board', (req, res, next) => {

    Board.create(req.body, (err, post) => (err) ? next(err) : res.json(post));
});

router.post('/board-file', upload.single('photo'),  (req, res, next) => {
  if (!req.file) {
         console.log("No file received");
         return res.send({
           success: false
         });

       } else {
         console.log('file received');
         return res.send({
           success: true
         });
       }
    console.log(res);
    res.type("application/json");
    res.send({
      result:true,
      originalname: req.file.originalname,
      filename:req.file.filename
    })
Board.create(req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// UPDATE Board
router.put('/board/:id', (req, res, next) => {
    Board.findByIdAndUpdate(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// DELETE A Board
router.delete('/board/:id', (req, res, next) => {
    Board.findByIdAndRemove(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});


module.exports = upload;
module.exports = router;
