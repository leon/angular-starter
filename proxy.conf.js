module.exports = {
  // Proxy All calls to /api/** to a pure api server
  '/api/*': {
    target: 'http://localhost:8080',
      secure: false
  }
};
