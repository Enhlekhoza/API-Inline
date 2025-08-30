# Deployment Guide

This guide covers various ways to deploy your API-Inline services.

## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Quick Start
```bash
# Install all dependencies
npm run install:all

# Start both services in development mode
npm run dev:all

# Or start them individually
npm run start:a  # RunA on port 3001
npm run start:b  # RunB on port 3002
```

## Docker Deployment

### Create Dockerfile for each service

#### RunA Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]
```

#### RunB Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["node", "index.js"]
```

### Docker Compose
Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  runa:
    build: ./RunA
    ports:
      - "3001:3001"
    environment:
      - PORT=3001
    restart: unless-stopped

  runb:
    build: ./RunB
    ports:
      - "3002:3002"
    environment:
      - PORT=3002
    restart: unless-stopped
```

### Run with Docker
```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Cloud Deployment

### Heroku

1. **Create Heroku apps:**
```bash
heroku create runa-api-inline
heroku create runb-api-inline
```

2. **Set environment variables:**
```bash
heroku config:set PORT=3001 --app runa-api-inline
heroku config:set PORT=3002 --app runb-api-inline
```

3. **Deploy:**
```bash
# Deploy RunA
cd RunA
git init
git add .
git commit -m "Initial commit"
git push heroku main

# Deploy RunB
cd ../RunB
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Railway

1. Connect your GitHub repository
2. Create two services pointing to RunA and RunB directories
3. Set environment variables for ports
4. Deploy automatically

### Render

1. Create two web services
2. Point to respective directories (RunA/RunB)
3. Set build command: `npm install`
4. Set start command: `node index.js`
5. Set environment variables for ports

## Environment Variables

### Production Configuration
```bash
# Port configuration
PORT=3001  # For RunA
PORT=3002  # For RunB

# Database (if you add persistent storage)
DATABASE_URL=your_database_connection_string

# Security
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

## Monitoring and Logging

### PM2 (Process Manager)
```bash
# Install PM2 globally
npm install -g pm2

# Start services with PM2
pm2 start RunA/index.js --name "runa-api"
pm2 start RunB/index.js --name "runb-api"

# Monitor processes
pm2 monit

# View logs
pm2 logs

# Restart services
pm2 restart all
```

### Health Checks
Add health check endpoints to your services:

```javascript
// Add to both index.js files
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

## Security Considerations

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure CORS origins properly
- [ ] Add rate limiting
- [ ] Implement authentication if needed
- [ ] Use HTTPS in production
- [ ] Set up proper logging
- [ ] Configure error handling

### Rate Limiting Example
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

## Scaling

### Horizontal Scaling
- Deploy multiple instances of each service
- Use a load balancer (nginx, HAProxy)
- Consider using Redis for session sharing

### Vertical Scaling
- Increase server resources
- Optimize Node.js performance
- Use clustering for multi-core utilization

## Troubleshooting

### Common Issues
1. **Port already in use**: Check if another service is using the port
2. **CORS errors**: Verify CORS configuration
3. **Memory leaks**: Monitor memory usage with PM2 or similar tools
4. **Connection timeouts**: Check network configuration

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run start:a
DEBUG=* npm run start:b
```

