const links = [
  {
    id: 1,
    url: 'https://devcode.la',
    description: 'bla bla bla'
  },
  {
    id: 2,
    url: 'https://nicobytes.github.io',
    description: 'bla bla bla ble ble ble'
  }
];

const resolvers = {
  Query: {
    allLinks: () => links
  },
  Mutation :{
    createLink: (_, params) => {
      const newLink = {
        id: links.length + 1,
        ...params.link
      };
      links.push(newLink);
      return newLink;
    }
  }
};

module.exports = resolvers;