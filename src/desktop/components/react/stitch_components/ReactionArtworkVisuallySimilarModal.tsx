import React from "react"
// @ts-ignore
import mediator from "desktop/lib/mediator.coffee"
import { Theme, Box } from "@artsy/palette"
import { ContextProvider } from "reaction/Artsy"
import { VisuallySimilarModalQueryRenderer } from "reaction/Apps/VisuallySimilarModal"
import { data as sd } from "sharify"

export const ReactionArtworkVisuallySimilarModal = props => {
  return (
    <Theme>
      <ContextProvider user={sd.CURRENT_USER} mediator={mediator}>
        <Box mb={6}>
          <VisuallySimilarModalQueryRenderer artworkID={props.artworkID} />
        </Box>
      </ContextProvider>
    </Theme>
  )
}
