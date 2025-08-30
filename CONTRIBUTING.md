# Contributing to API-Inline

Thank you for your interest in contributing to API-Inline! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm
- Git

### Setting Up the Development Environment

1. **Fork the repository**
   - Go to [https://github.com/Enhlekhoza/API-Inline](https://github.com/Enhlekhoza/API-Inline)
   - Click the "Fork" button to create your own copy

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/API-Inline.git
   cd API-Inline
   ```

3. **Add the original repository as upstream**
   ```bash
   git remote add upstream https://github.com/Enhlekhoza/API-Inline.git
   ```

4. **Install dependencies**
   ```bash
   npm run install:all
   ```

5. **Start the development servers**
   ```bash
   npm run dev:all
   ```

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes
```bash
# Test the APIs manually
cd examples
npm install
npm test

# Or test individual services
npm run test:runa
npm run test:runb
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add new endpoint for item deletion

- Added DELETE /items/:id endpoint
- Implemented item removal logic
- Added validation for item ID
- Updated API documentation"
```

### 5. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request
- Go to your fork on GitHub
- Click "New Pull Request"
- Select your feature branch
- Write a clear description of your changes
- Reference any related issues

## Code Style Guidelines

### JavaScript/Node.js
- Use ES6+ features when possible
- Use `const` and `let` instead of `var`
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Use destructuring for objects and arrays

### API Design
- Follow RESTful principles
- Use consistent HTTP status codes
- Return consistent JSON response formats
- Include proper error messages
- Use descriptive endpoint names

### Example of Good Code
```javascript
// Good: Clear variable names, proper error handling
app.post('/items', (req, res) => {
  const { name, description, category } = req.body;
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ 
      error: 'Name is required and must be a string' 
    });
  }
  
  const newItem = { name, description, category };
  items.push(newItem);
  
  res.status(201).json({ item: newItem });
});
```

## Testing Guidelines

### Manual Testing
- Test all endpoints with valid data
- Test error cases with invalid data
- Test CORS functionality
- Test with different HTTP clients (cURL, Postman, browser)

### Automated Testing (Future)
When adding tests, follow these guidelines:
- Test both positive and negative scenarios
- Mock external dependencies
- Use descriptive test names
- Group related tests together

## Documentation

### Code Comments
- Comment complex business logic
- Explain non-obvious code decisions
- Use JSDoc format for function documentation

### API Documentation
- Update `API.md` when adding new endpoints
- Include request/response examples
- Document error codes and messages
- Keep examples up-to-date

### README Updates
- Update installation instructions if needed
- Add new features to the features list
- Update usage examples

## Issue Reporting

### Before Creating an Issue
- Check existing issues for duplicates
- Search the documentation for solutions
- Try to reproduce the issue locally

### Issue Template
When reporting issues, include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version)
- Error messages and stack traces

## Pull Request Guidelines

### Before Submitting
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] CORS is properly configured

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] All endpoints tested
- [ ] Error cases tested

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Community Guidelines

### Be Respectful
- Be kind and respectful to other contributors
- Provide constructive feedback
- Help newcomers get started
- Celebrate others' contributions

### Communication
- Use clear, concise language
- Ask questions when unsure
- Share knowledge and best practices
- Be patient with responses

## Getting Help

### Resources
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [REST API Design](https://restfulapi.net/)

### Questions
- Create an issue for questions
- Use the issue template
- Tag issues appropriately
- Provide context and examples

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## License

By contributing to API-Inline, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to API-Inline! 🚀



