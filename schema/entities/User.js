const UserDef = `
type User {
  id: ID!
  name: String!
  email: String!
  links: [Link!]
}

input newUser{
  name: String!
  email: String!
}
`;

module.exports = UserDef;