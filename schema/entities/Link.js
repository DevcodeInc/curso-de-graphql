const LinkDef = `
# Esto representa la entidad link
type Link {
  id: ID!
  url: String!
  description: String!
}

input newLink{
  url: String!
  description: String!
}
`;

module.exports = LinkDef;