import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ObjectId } from "@fastify/mongodb";

const plugin: FastifyPluginAsyncTypebox = async (fastify: FastifyInstance, options: {})=>{
    fastify.get("/", {
        schema: {
            params: Type.Object({
                id: Type.String()
            }),
            response: {
                200: Type.Object({
                    _id: Type.String(),
                    name: Type.String()
                })  
            }
        }
    },async (request: FastifyRequest<{ Params: { id: string }}>, reply: FastifyReply)=>{
        const { id } = request.params;
        const collection = fastify.mongo.db?.collection("type")
        const data = await collection?.findOne({
            _id: new ObjectId(id)
        })
        return reply.code(200).send({
            _id: data?._id, 
            name: data?.name
        });
    });
}

export default plugin;