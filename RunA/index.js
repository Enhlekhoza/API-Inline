const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// In-memory store
const items = [];

// GET /items
app.get('/items', (req, res) => {
	res.json({ items });
});

// POST /items
app.post('/items', (req, res) => {
	const item = req.body;
	if (!item || typeof item !== 'object') {
		return res.status(400).json({ error: 'Invalid item' });
	}
	items.push(item);
	res.status(201).json({ item });
});

app.listen(port, () => {
	console.log(`RunA API listening on port ${port}`);
});


