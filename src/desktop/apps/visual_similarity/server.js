import express from "express"
import { visualSimilarity } from "desktop/apps/visual_similarity/routes"

const app = (module.exports = express())

app.get("/visual_similarity/:artworkID", visualSimilarity)

export default app
