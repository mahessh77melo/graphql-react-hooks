const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	name: String,
	genre: String,
	authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
/* this is not a graphql schema. this is a mongodb schema. */
// Id is allocated by mongodb itself for every object we create.
// we can access it with the _id parameter.
