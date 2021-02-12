const { ApoolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Album {
    id: ID!
    name: String!
    # releaseDate: String
    # streamEmbed: 
    # art: String
    tracks: [Track!]!
    type: String
    listenLink: String
  }
  type Track {
    id: ID!
    name: String!
    duration: Int!
    lyrics: [String]
    trackNumber: Int
    feature: String[]
    appearsIn: [Album]
  }  
  type Performer {
    id: ID!
    appearsIn: [Show]
    name: String!
    link: String
    members: [String]
  }
  type Show {
    # id: ID!
    title: String!
    location: String!
    # image: String
    # date: [Int!]!
    startTime: String!
    endTime: String!
    about: String
    performers: [Performer]
    eventType: String,
    eventLink: String,
    locationAddress: String,
    cityState: String,
    price: String
  }
  type Query {
    albums: [Album]
    shows: [Show]
    performers: [Performer]
    tracks: [Track]
  }
`;

