import { ApolloServer, gql } from 'apollo-server-micro';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { IProjects, ISkills } from '../../typings';

const typeDefs = gql`
  type Image {
    url: String!
  }

  type Tech {
    text: String!
  }

  type Project {
    id: String!
    title: String!
    uniqueId: Int!
    description: String!
    demoLink: String!
    githubLink: String!
    techStack: [Tech!]!
    image: Image!
  }

  type Skill {
    id: String!
    uniqueId: Int!
    proficient: Boolean!
    skill: String!
    url: String!
    fieldType: String
    image: Image!
  }

  type Query {
    projects: [Project!]!
    skills: [Skill!]!
  }
`;

const resolvers = {
  Query: {
    projects: () => projects,
    skills: () => skills,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });