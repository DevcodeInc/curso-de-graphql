const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const LinkDef = require('./entities/Link');
const UserDef = require('./entities/User');

const rootQuery = `
type Query {
  allLinks: [Link!]
  link(id: Int!): Link
  allUsers: [User!]
}
type Mutation {
  createLink(link: newLink): Link
  updateLink(id: Int!, link: updateLink): Link
  deleteLink(id: Int!): Link
  createUser(user: newUser): User
}
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery, LinkDef, UserDef],
  resolvers
});