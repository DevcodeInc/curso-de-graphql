const Link = require('./../models/Link');
const User = require('./../models/User');

const resolvers = {
  Query: {
    allLinks: () => Link.query().eager('postedBy'),
    link: (_, params) => {
      const id = params.id;
      return Link.query().eager('postedBy').findById(id);
    },
    allUsers: () => User.query().eager('links')
  },
  Mutation :{
    createLink: (_, params) => {
      const newLink = params.link;
      if ( newLink.postedBy ) {
        return User.query().findById(newLink.postedBy)
        .then((user) => {
          if (user === undefined) {
            throw new Error('user not found')
          }else {
            return Link.query().eager('postedBy').insert(newLink);
          }
        })
      }
      return Link.query().eager('postedBy').insert(newLink);
    },
    updateLink: (_, params) => {
      const id = params.id;
      const updateLink = params.link;
      return Link.query().eager('postedBy').patchAndFetchById(id, updateLink);
    },
    deleteLink: (_, params) => {
      const id = params.id;
      return Link.query().eager('postedBy').findById(id)
      .then((link) => {
        return Link.query().deleteById(id)
        .then(() => link);
      });
    },
    createUser: (_, params) => {
      const newUser = params.user;
      return User.query().insert(newUser);
    }
  }
};

module.exports = resolvers;