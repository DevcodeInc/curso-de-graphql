const Link = require('./../models/Link');

const resolvers = {
  Query: {
    allLinks: () => Link.query()
  },
  Mutation :{
    createLink: (_, params) => {
      return null;
    }
  }
};

module.exports = resolvers;