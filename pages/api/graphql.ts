import { ApolloServer, gql } from 'apollo-server-micro';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { jobs } from '../../data/jobs';
import { IProjects, ISkills, IJobs } from '../../typings';

// GraphQL type definitions
const typeDefs = gql`
  type Image { url: String }
  type Text { text: String }
  type Skill { id: ID!, uniqueId: Int, proficient: Boolean, skill: String, url: String, fieldType: String, image: Image }
  type Project { id: ID!, title: String, uniqueId: Int, description: String, demoLink: String, githubLink: String, techStack: [Text], image: Image }
  type Job { id: ID!, company: String, designation: String, from: String, to: String, logo: Image, companyUrl: String, companyLinkedin: String }
  type Query { projects: [Project], skills: [Skill], jobs: [Job] }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    projects: () => projects,
    skills: () => skills,
    jobs: () => jobs,
  },
};

// Apollo Server instance
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Disable body parsing for GraphQL
export const config = { api: { bodyParser: false } };

// Apollo Server handler
let apolloServerHandler: ReturnType<typeof apolloServer.createHandler> | null = null;

/**
 * GraphQL API handler
 * @param req - Request object
 * @param res - Response object
 */
export default async function handler(req: any, res: any) {
  if (!apolloServerHandler) {
    await apolloServer.start();
    apolloServerHandler = apolloServer.createHandler({ path: '/api/graphql' });
  }
  return apolloServerHandler(req, res);
}