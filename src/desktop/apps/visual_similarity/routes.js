import React from "react"
import styled from "styled-components"
import { buildServerApp } from "reaction/Artsy/Router/server"
import { buildServerAppContext } from "desktop/lib/buildServerAppContext"
import { routes } from "reaction/Apps/VisualSimilarity/routes"
import { stitch } from "@artsy/stitch"
import metaphysics from "lib/metaphysics.coffee"

export const visualSimilarity = async (req, res, next) => {
  try {
    const { ServerApp, redirect, status, headTags } = await buildServerApp({
      routes,
      url: req.url,
      context: buildServerAppContext(req, res),
    })

    if (redirect) {
      res.redirect(302, redirect.url)
      return
    }

    // FIXME: Move this to Reaction
    const Container = styled.div`
      width: 100%;
      max-width: 1192px;
      margin: auto;
    `

    // FIXME
    // const headerLogoHref = await getArtworkHref(req)

    // Render layout
    const layout = await stitch({
      basePath: __dirname,
      layout:
        "../../components/main_layout/templates/react_minimal_header.jade",
      config: {
        styledComponents: true,
      },
      blocks: {
        head: () => headTags,
        body: () => (
          <Container>
            <ServerApp />
          </Container>
        ),
      },
      locals: {
        ...res.locals,
        assetPackage: "visual_similarity",
        // header logo should link back to originating artwork
        headerLogoHref: "/",
      },
    })

    res.status(status).send(layout)
  } catch (error) {
    console.log("(apps/visualSimilarity) Error: ", error)
    next(error)
  }
}

async function getArtworkHref(req) {
  try {
    const { order } = await metaphysics({
      query: OrderHeaderQuery(req.params.orderID),
      req,
    })
    return order.lineItems.edges[0].node.artwork.href
  } catch (e) {
    console.error(e)
    return "/"
  }
}
