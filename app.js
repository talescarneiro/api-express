import express from "express"
import usersRoutes from "./src/routes/users.routes.js"

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({message: "Hosting nodejs on netlify"})
})

const PORT = 3000

app.listen(PORT, () => console.log('Server is running!'))

export default app
