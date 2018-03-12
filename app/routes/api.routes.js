module.exports = function(app) {

  const quotes = require('../controllers/quote.controller.js');
 
  // Create a new Quote
  app.post('/api/quotes', quotes.create);

  // Retrieve all Quotes
  app.get('/api/quotes', quotes.findAll);

  // Retrieve a single Quote with quoteId
  app.get('/api/quotes/:quoteId', quotes.findOne);

  // Update a Quote with quoteId
  app.put('/api/quotes/:quoteId', quotes.update);

  // Delete a Quote with quoteId
  app.delete('/api/quotes/:quoteId', quotes.delete);
}