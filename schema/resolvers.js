const Link = require('./../models/Link');

const resolvers = {
  Query: {
    allLinks: () => Link.query()
  },
  Mutation :{
    createLink: (_, params) => {
      const newLink = params.link;
      return Link.query().insert(newLink);
    },
    updateLink: (_, params) => {
      const id = params.id;
      const updateLink = params.link;
      return Link.query().patchAndFetchById(id, updateLink);
    }
  }
};

module.exports = resolvers;