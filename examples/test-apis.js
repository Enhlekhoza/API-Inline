const axios = require('axios');

// Configuration
const RUNA_URL = 'http://localhost:3001';
const RUNB_URL = 'http://localhost:3002';

// Test data
const testItems = [
  { name: 'Item 1', description: 'First test item' },
  { name: 'Item 2', description: 'Second test item' },
  { name: 'Item 3', description: 'Third test item' }
];

async function testRunA() {
  console.log('🧪 Testing RunA API (Port 3001)...\n');
  
  try {
    // Test GET /items (should be empty initially)
    console.log('1. Testing GET /items (initial state):');
    const getResponse = await axios.get(`${RUNA_URL}/items`);
    console.log('   Response:', getResponse.data);
    
    // Test POST /items
    console.log('\n2. Testing POST /items:');
    for (const item of testItems) {
      const postResponse = await axios.post(`${RUNA_URL}/items`, item);
      console.log(`   Added:`, postResponse.data.item);
    }
    
    // Test GET /items again (should now have items)
    console.log('\n3. Testing GET /items (after adding items):');
    const getResponse2 = await axios.get(`${RUNA_URL}/items`);
    console.log('   Response:', getResponse2.data);
    
  } catch (error) {
    console.error('   ❌ Error testing RunA:', error.message);
  }
}

async function testRunB() {
  console.log('\n🧪 Testing RunB API (Port 3002)...\n');
  
  try {
    // Test GET /items (should be empty initially)
    console.log('1. Testing GET /items (initial state):');
    const getResponse = await axios.get(`${RUNB_URL}/items`);
    console.log('   Response:', getResponse.data);
    
    // Test POST /items
    console.log('\n2. Testing POST /items:');
    for (const item of testItems) {
      const postResponse = await axios.post(`${RUNB_URL}/items`, item);
      console.log(`   Added:`, postResponse.data.item);
    }
    
    // Test GET /items again (should now have items)
    console.log('\n3. Testing GET /items (after adding items):');
    const getResponse2 = await axios.get(`${RUNB_URL}/items`);
    console.log('   Response:', getResponse2.data);
    
  } catch (error) {
    console.error('   ❌ Error testing RunB:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  // Test both APIs
  await testRunA();
  await testRunB();
  
  console.log('\n✅ API testing completed!');
  console.log('\n📝 Note: Make sure both services are running before executing this script.');
  console.log('   RunA: npm run start:a (Port 3001)');
  console.log('   RunB: npm run start:b (Port 3002)');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testRunA, testRunB, runTests };



