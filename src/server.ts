
import { createSchema, createYoga } from 'graphql-yoga'

const yoga = createYoga({ 
    schema: createSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            hello: String
            world: String
          }
        `,
        resolvers: {
          Query: {
            hello: () => 'hello',
            world: ()=> 'world',
          }
        }
      })
})

const server = Bun.serve({
    port: 5500,
    fetch: yoga
})
   
console.info(
`Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
)}`
)