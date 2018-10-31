const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Board = require('../models/Board.js');

// API ROOT ROUTE
router.get('/', (req, res) => {
    res.status(200).json({ status: 200, result: 'success' });
});

// GET ALL BoardS
router.get('/board', (req, res, next) => {
    Board.find((err, products) => (err) ? next(err) : res.json(products));
});


// GET A Board
router.get('/board/:id', (req, res, next) => {
    Board.findById(req.params.id, (err, post) => (err) ? next(err) : res.json(post));
});

// SAVE A Board
router.post('/board', (req, res, next) => {
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

module.exports = router;
