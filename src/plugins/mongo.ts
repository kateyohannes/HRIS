import { FastifyMongodbOptions } from "@fastify/mongodb"

import { FastifyInstance } from "fastify";

const config: FastifyMongodbOptions = {
  forceClose: true,
  url: 'mongodb://localhost:27017/pension_db'
}

export const connnection = (fastify: FastifyInstance)=>{
    fastify.decorate("mongo", fastify.register(require('@fastify/mongodb'), config));
}