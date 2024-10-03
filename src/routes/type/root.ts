import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";


const plugin: FastifyPluginAsyncTypebox = async (fastify: FastifyInstance, options: {})=>{
    fastify.get("/", {
        schema: {
            response: {
                200: Type.Array(Type.Object({
                    _id: Type.String(),
                    name: Type.String()
                })  )
            }
        }
    },async (request: FastifyRequest, reply: FastifyReply)=>{
        const collection = await fastify.mongo.db?.collection("type");
        const data = await collection?.find().toArray()
        return reply.code(200).send(data);
    });
}

export default plugin;