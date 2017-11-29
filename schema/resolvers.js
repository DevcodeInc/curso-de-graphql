const Link = require('./../models/Link');

const resolvers = {
  Query: {
    allLinks: () => Link.query()
  },
  Mutation :{
    createLink: (_, params) => {
      const newLink = params.link;
      return Link.query().insert(newLink);
    }
  }
};

module.exports = resolvers;