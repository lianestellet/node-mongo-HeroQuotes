const Note = require('../models/note.model.js');

exports.create = function(req, res) {
  // Create and Save a new Note
  if(!req.body.content) {
      return res.status(400).send({message: "Note can not be empty"});
  }

  var note = new Note({title: req.body.title || "Untitled Note", content: req.body.content});

  note.save(function(err, data) {
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while creating the Note."});
      } else {
          res.send(data);
      }
  });
};

exports.findAll = function(req, res) {
  // Retrieve and return all notes from the database.
  Note.find(function(err, notes){
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(notes);
      }
  });
};

exports.findOne = function(req, res) {
  // Find a single note with a noteId
  Note.findById(req.params.noteId, function(err, note) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Note not found with id " + req.params.noteId});                
          }
          return res.status(500).send({message: "Error retrieving note with id " + req.params.noteId});
      } 

      if(!note) {
          return res.status(404).send({message: "Note not found with id " + req.params.noteId});            
      }

      res.send(note);
  });
};

exports.update = function(req, res) {
  // Update a note identified by the noteId in the request
  Note.findById(req.params.noteId, function(err, note) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Note not found with id " + req.params.noteId});                
          }
          return res.status(500).send({message: "Error finding note with id " + req.params.noteId});
      }

      if(!note) {
          return res.status(404).send({message: "Note not found with id " + req.params.noteId});            
      }

      note.title = req.body.title;
      note.content = req.body.content;

      note.save(function(err, data){
          if(err) {
              res.status(500).send({message: "Could not update note with id " + req.params.noteId});
          } else {
              res.send(data);
          }
      });
  });
};

exports.delete = function(req, res) {
  // Delete a note with the specified noteId in the request
  Note.findByIdAndRemove(req.params.noteId, function(err, note) {
      if(err) {
          console.log(err);
          if(err.kind === 'ObjectId') {
              return res.status(404).send({message: "Note not found with id " + req.params.noteId});                
          }
          return res.status(500).send({message: "Could not delete note with id " + req.params.noteId});
      }

      if(!note) {
          return res.status(404).send({message: "Note not found with id " + req.params.noteId});
      }

      res.send({message: "Note deleted successfully!"})
  });
};