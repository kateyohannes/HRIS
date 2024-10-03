
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const plugin: FastifyPluginAsyncTypebox = async (fastify: FastifyInstance, options: {})=>{
    fastify.get("/", (request: FastifyRequest, reply: FastifyReply)=>{
        return reply.code(200).send({
            message: "It's Working!"
        });
    });
}

export default plugin;