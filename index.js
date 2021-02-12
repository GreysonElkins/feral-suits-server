const { ApoolloServer, gql, ApolloServer } = require('apollo-server');

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
    feature: [String]
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
    performers: [Performer!]
    eventType: String,
    eventLink: String,
    ticketLink: String,
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

const shows = [
  {
    title: 'Feral Suits @ Seventh Circle',
    location: 'Seventh Circle Music Collective',
    // image: 
    // date: new Date(2020, 3, 28),
    startTime: '19:00',
    endTime: '23:59',
    about: 'Feral Suits is celebrating their name change with some new songs, live at Seventh Circle, with a big cast of dear friends.',
    // performers: [milkOfMag, somedayBest, motelFrunz, blanchard],
    eventType: 'cancelled',
    eventLink: 'https://www.facebook.com/events/585802978640122/',
    ticketLink: 'https://7thcirclemusiccollective.org/event/milk-of-magnesia-someday-best-blanchard-feral-suits-motel-frunz-7c/',
    locationAddress: '2935 W 7th Ave',
    cityState: 'Denver, CO',
    price: '$7 to $10 suggested donation'
  }, {
    title: 'Feral Suits with Lunch Dutchess',
    location: 'Syntax Physic Opera',
    // image: dutches,
    // new Date(2018, 10, 28),
    startTime: '20:00',
    endTime: '23:59',
    about: "Lunch Duchess (MN) returns to Denver after 2 years, bringing their angular brand of half-silly, half-cathartic grunge pop with them. With one moody new single from their upcoming album already out and another forthcoming, they're a band to keep an eye on!",
    // performers: [lunchDuchess, definitelyMaybe, specificOcean],
    showType: 'venue',
    eventLink: 'https://www.facebook.com/events/315728939229549/',
    ticketLink: 'https://physicopera.com/calendar.html',
    locationAddress: '554 S Broadway',
    cityState: 'Denver, CO',
    price: 'Free'
  }, {
    title: "Girngo Star's Album Release Party", 
    location: "Lost Lake and Colorado Public Radio's Open Air",
    // image: gringo,
    // date: new Date(2018, 9, 25),
    startTime: '19:00',
    endTime: '23:59',
    about: "Feral Suits is stoked to be supporting Gringo Start on their 2018 tour-stop in Denver CO - come around for some Tuesday night bangers.",
    // performers: [gringoStar, turvyOrgan],
    eventType: 'venue',
    eventLink: 'https://www.facebook.com/events/1450341381734375/',
    ticketLink: 'https://www.lost-lake.com/',
    locationAddress: '3602 E Colfax Ave',
    cityState: 'Denver, CO',
    price: '$10'
  }, {
    title: "Feral Suits Album Release Party",
    location: "Dazzle Denver",
    // image: tempDazzle,
    // date: new Date(2021, 3, 18),
    startTime: '19:00',
    endTime: '20:00',
    about: "In celebration of their first album, Feral Suits will be live-streaming a performance from one of the most eminent jazz clubs in the nation, Dazzle Denver. Tune in from the comfort of your home for good vibes.",
    eventType: 'virtual',
    eventLink:'facebook.com',
    ticketLink: 'https://dazzledenver.com/live-streams/',
    locationAddress: '1512 Curtis Street',
    cityState: 'Denver, CO',
    price: 'Free'
  }, {
    title: "Feral Suits (Shuttles) at UMS",
    location: "Denver's Underground Music Showcase @ Moe's BBQ",
    //  image: umsPic,
    // date: new Date(2018, 7, 28),
    startTime: '21:00',
    endTime: '22:00',
    about: "Feral Suits' debut show at Underground Music Showcase is going to be a kicker. Come meet the crew at Moe's BBQ.",
    eventType: 'venue',
    eventLink: 'https://www.facebook.com/events/240411439848093/',
    ticketLink: 'https://www.undergroundmusicshowcase.com/',
    locationAddress: '472 Broadway, Denver, CO 80203',
    cityState: 'Denver, CO',
  }
];

const resolvers = {
  Query: {
    shows: () => shows,
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🤘 Server ready at ${ url }`)
});