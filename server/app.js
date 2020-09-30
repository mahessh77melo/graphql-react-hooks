const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
// mongoose.useNewUrlParser = true;

const app = express();

// allow cross origin requests
app.use(cors());

mongoose.connect(
	/*your mondodb url*/
);
mongoose.connection.once("open", () => {
	console.log("Connected to the database");
});
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
	console.log("Listening for changes in port http://localhost:4000");
});
