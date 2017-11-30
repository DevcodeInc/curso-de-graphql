const UserDef = `
type User {
  id: ID!
  name: String!
  email: String!
  links: [Link!]
}
`;

module.exports = UserDef;