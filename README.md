# API-Inline

A simple, lightweight API service project demonstrating inline API development with Express.js.

## Project Structure

This project contains two separate API services that can run independently:

- **RunA**: API service running on port 3001
- **RunB**: API service running on port 3002

## Features

- RESTful API endpoints
- CORS enabled
- JSON body parsing
- In-memory data storage
- Simple CRUD operations

## API Endpoints

Both services provide the following endpoints:

### GET /items
Retrieves all items from the in-memory store.

**Response:**
```json
{
  "items": []
}
```

### POST /items
Adds a new item to the store.

**Request Body:**
```json
{
  "name": "Example Item",
  "description": "Item description"
}
```

**Response:**
```json
{
  "item": {
    "name": "Example Item",
    "description": "Item description"
  }
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Enhlekhoza/API-Inline.git
cd API-Inline
```

2. Install dependencies for each service:

For RunA:
```bash
cd RunA
npm install
```

For RunB:
```bash
cd RunB
npm install
```

### Running the Services

#### RunA (Port 3001)
```bash
cd RunA
node index.js
```
The service will start on http://localhost:3001

#### RunB (Port 3002)
```bash
cd RunB
node index.js
```
The service will start on http://localhost:3002

### Running Both Services

You can run both services simultaneously in separate terminal windows, or use a process manager like PM2.

## Development

### Adding New Endpoints

To add new endpoints, modify the respective `index.js` file in either RunA or RunB:

```javascript
// Example: Add a DELETE endpoint
app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  // Your logic here
  res.json({ message: 'Item deleted' });
});
```

### Configuration

You can modify the port numbers by changing the `port` variable in each service's `index.js` file, or by setting the `PORT` environment variable.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Author

Enhlekhoza
