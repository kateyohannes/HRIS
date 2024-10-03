
import fastify from "fastify";
import Autoload from "@fastify/autoload";
import { join } from "path";

const server = fastify({ logger: true })

server.register(Autoload,{
    dir: join(__dirname, 'routes')
});

server.register(Autoload,{
    dir: join(__dirname, 'plugins')
})
const start = async()=>{
    try{
        server.listen({
            port: 3000,
            host: '127.0.0.1'
        })
        console.log("server is on")
    }catch(err){
        console.log("server is down")
        process.exit(1)
    }
}

start()