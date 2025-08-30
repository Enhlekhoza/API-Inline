# API Documentation

This document provides detailed information about the API endpoints available in both RunA and RunB services.

## Base URLs

- **RunA**: `http://localhost:3001` (or your deployed URL)
- **RunB**: `http://localhost:3002` (or your deployed URL)

## Authentication

Currently, no authentication is required for these endpoints. In production, consider implementing proper authentication mechanisms.

## Endpoints

### 1. Get All Items

Retrieves all items from the in-memory store.

**Endpoint:** `GET /items`

**URL:** `{base_url}/items`

**Response:**
```json
{
  "items": [
    {
      "name": "Item 1",
      "description": "First test item"
    },
    {
      "name": "Item 2",
      "description": "Second test item"
    }
  ]
}
```

**Example Request:**
```bash
curl -X GET http://localhost:3001/items
```

**Example Response:**
```json
{
  "items": []
}
```

### 2. Create New Item

Adds a new item to the in-memory store.

**Endpoint:** `POST /items`

**URL:** `{base_url}/items`

**Request Body:**
```json
{
  "name": "New Item",
  "description": "Item description",
  "category": "electronics",
  "price": 99.99
}
```

**Response:**
```json
{
  "item": {
    "name": "New Item",
    "description": "Item description",
    "category": "electronics",
    "price": 99.99
  }
}
```

**Example Request:**
```bash
curl -X POST http://localhost:3001/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High-performance laptop",
    "category": "electronics",
    "price": 1299.99
  }'
```

**Example Response:**
```json
{
  "item": {
    "name": "Laptop",
    "description": "High-performance laptop",
    "category": "electronics",
    "price": 1299.99
  }
}
```

## Data Structure

### Item Object
```json
{
  "name": "string (required)",
  "description": "string (optional)",
  "category": "string (optional)",
  "price": "number (optional)",
  "tags": "array (optional)",
  "metadata": "object (optional)"
}
```

### Required Fields
- `name`: The name of the item (string)

### Optional Fields
- `description`: Description of the item
- `category`: Category classification
- `price`: Numeric price value
- `tags`: Array of tags
- `metadata`: Additional custom properties

## Error Handling

### 400 Bad Request
Returned when the request body is invalid or missing required fields.

**Example:**
```json
{
  "error": "Invalid item"
}
```

**Common Causes:**
- Missing request body
- Invalid JSON format
- Missing required fields

### 500 Internal Server Error
Returned when an unexpected error occurs on the server.

## Rate Limiting

Currently, no rate limiting is implemented. In production, consider adding rate limiting to prevent abuse.

## CORS

Cross-Origin Resource Sharing is enabled for all origins. In production, restrict this to specific domains.

## Testing

### Using the Example Script
```bash
cd examples
npm install
npm test
```

### Using cURL
```bash
# Test RunA
curl http://localhost:3001/items
curl -X POST http://localhost:3001/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item"}'

# Test RunB
curl http://localhost:3002/items
curl -X POST http://localhost:3002/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item"}'
```

### Using Postman
1. Create a new collection
2. Add requests for each endpoint
3. Set the appropriate base URL for each service
4. Test the endpoints

## Development Notes

### In-Memory Storage
- Data is stored in memory and will be lost when the service restarts
- Each service maintains its own separate data store
- No data persistence between service restarts

### Adding New Endpoints
To add new endpoints, modify the respective `index.js` file:

```javascript
// Example: Add a DELETE endpoint
app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  // Implementation logic
  res.json({ message: 'Item deleted successfully' });
});

// Example: Add a PUT endpoint for updates
app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  // Implementation logic
  res.json({ message: 'Item updated successfully' });
});
```

### Validation
Consider adding input validation for production use:

```javascript
const { body, validationResult } = require('express-validator');

app.post('/items', [
  body('name').notEmpty().trim().escape(),
  body('price').isNumeric().optional()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process request
});
```

## Future Enhancements

- [ ] Add item ID for individual item operations
- [ ] Implement item updates and deletion
- [ ] Add search and filtering capabilities
- [ ] Implement data persistence (database)
- [ ] Add user authentication and authorization
- [ ] Implement rate limiting
- [ ] Add request logging and monitoring
- [ ] Implement pagination for large datasets

