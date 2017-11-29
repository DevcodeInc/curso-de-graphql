const LinkDef = `
# Esto representa la entidad link
type Link {
  # Esto el id de la entidad
  id: ID!
  url: String!
  description: String! @deprecated(reason: "ya no vamos a tener este campo")
}
`;

module.exports = LinkDef;