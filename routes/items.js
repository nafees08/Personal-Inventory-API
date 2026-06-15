const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// POST /items - add a new item
router.post('/', async (req, res) => {
  try {
    const { title, category, quantity } = req.body; 

    const item = new Item({ title, category, quantity });
    const saved = await item.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /items - get all items (with optional category filter)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const items = await Item.find(filter);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /items/:id - update quantity
router.patch('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Item not found' });

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /items/:id - delete an item
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ error: 'Item not found' });

    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;