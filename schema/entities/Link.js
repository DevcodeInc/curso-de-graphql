const LinkDef = `
# Esto representa la entidad link
type Link {
  id: ID!
  url: String!
  description: String!
  postedBy: User
}

input newLink{
  url: String!
  description: String!
  postedBy: Int
}

input updateLink{
  url: String
  description: String
}
`;

module.exports = LinkDef;