const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const LinkDef = require('./entities/Link');

const rootQuery = `
type Query {
  allLinks: [Link!]
}
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery, LinkDef],
  resolvers
});