const { makeExecutableSchema } = require('graphql-tools');

const rootQuery = `
type Query {
  allWords: [String]
}
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery],
});