import { buildClientApp } from "reaction/Artsy/Router/client"
import { data as sd } from "sharify"
import { routes } from "reaction/Apps/VisualSimilarity/routes"
import mediator from "desktop/lib/mediator.coffee"
import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

buildClientApp({
  routes,
  context: {
    user: sd.CURRENT_USER,
    mediator,
  },
  history: {
    options: {
      useBeforeUnload: true,
    },
  },
})
  .then(({ ClientApp }) => {
    console.log("ClientApp", ClientApp)
    ReactDOM.hydrate(
      <Container>
        <ClientApp />
      </Container>,

      document.getElementById("react-root")
    )
  })
  .catch(error => {
    console.error(error)
  })

if (module.hot) {
  module.hot.accept()
}

// FIXME: Move this to Reaction
const Container = styled.div`
  width: 100%;
  max-width: 1192px;
  margin: auto;
`
