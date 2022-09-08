import express from "express"
import usersRoutes from "./src/routes/users.routes.js"

const app = express()

app.use("", usersRoutes)

const PORT = 3000

app.listen(PORT, () => console.log('Server is running!'))