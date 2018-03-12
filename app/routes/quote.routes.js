module.exports = function(app) {

  const quotes = require('../controllers/quote.controller.js');

  // Create a new Quote
  app.post('/quotes', quotes.create);

  // Retrieve all Quotes
  app.get('/quotes', quotes.findAll);

  // Retrieve a single Quote with quoteId
  app.get('/quotes/:quoteId', quotes.findOne);

  // Update a Quote with quoteId
  app.put('/quotes/:quoteId', quotes.update);

  // Delete a Quote with quoteId
  app.delete('/quotes/:quoteId', quotes.delete);
}