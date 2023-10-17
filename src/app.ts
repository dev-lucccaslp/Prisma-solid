import fastify from "fastify"
import { appRoutes } from "./http/route"
import { ZodError } from "zod"
import { env } from "./env"

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, _request, reply) => {  // <-- tratamento de erro global
  if(error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if(env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // utilizar log de observabilidade externo.
  }

  return reply.status(500).send({ message: 'Internal server error.'})
})