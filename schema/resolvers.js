const Link = require('./../models/Link');
const User = require('./../models/User');

const resolvers = {
  Query: {
    allLinks: () => Link.query(),
    link: (_, params) => {
      const id = params.id;
      return Link.query().findById(id);
    },
    allUsers: () => User.query()
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
    },
    deleteLink: (_, params) => {
      const id = params.id;
      return Link.query().findById(id)
      .then((link) => {
        return Link.query().deleteById(id)
        .then(() => link);
      });
    }
  }
};

module.exports = resolvers;