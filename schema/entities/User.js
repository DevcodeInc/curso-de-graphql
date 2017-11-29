const UserDef = `
# Esto representa la entidad link
type User {
  id: ID!
  name: String
  email: String!
  links: [Link!]
}
`;

module.exports = UserDef;