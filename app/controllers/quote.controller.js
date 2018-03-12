const Quote = require('../models/quote.model.js');

exports.create = function(req, res) {
  // Create and Save a new Quote
  if(!req.body.message) {
      return res.status(400).send({message: "Quote can not be empty"});
  }

  var quote = new Quote({hero: req.body.hero || "Unknow hero", message: req.body.message});

  quote.save(function(err, data) {
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while creating the Quote."});
      } else {
          res.send(data);
      }
  });
};

exports.findAll = function(req, res) {
  // Retrieve and return all quotes from the database.
  Quote.find(function(err, quotes){
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while retrieving quotes."});
      } else {
          res.send(quotes);
      }
  });
};

exports.findOne = function(req, res) {
  // Find a single quote with a quoteeId
  Quote.findById(req.params.quoteId, function(err, quote) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});                
          }
          return res.status(500).send({message: "Error retrieving quote with id " + req.params.quoteId});
      } 

      if(!quote) {
          return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});            
      }

      res.send(quote);
  });
};

exports.update = function(req, res) {
  // Update a quote identified by the quoteId in the request
  Quote.findById(req.params.quoteId, function(err, quote) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});                
          }
          return res.status(500).send({message: "Error finding quote with id " + req.params.quoteId});
      }

      if(!quote) {
          return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});            
      }

      quote.hero = req.body.hero;
      quote.message = req.body.message;

      quote.save(function(err, data){
          if(err) {
              res.status(500).send({message: "Could not update quote with id " + req.params.quoteId});
          } else {
              res.send(data);
          }
      });
  });
};

exports.delete = function(req, res) {
  // Delete a quote with the specified quoteId in the request
  Quote.findByIdAndRemove(req.params.quoteId, function(err, quote) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});                
          }
          return res.status(500).send({message: "Could not delete quote with id " + req.params.quoteId});
      }

      if(!quote) {
          return res.status(404).send({message: "Quote not found with id " + req.params.quoteId});
      }

      res.send({message: "Quote deleted successfully!"})
  });
};