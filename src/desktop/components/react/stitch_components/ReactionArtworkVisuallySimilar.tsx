import React from "react"
// @ts-ignore
import mediator from "desktop/lib/mediator.coffee"
import { Theme, Box } from "@artsy/palette"
import { ContextProvider } from "reaction/Artsy"
import { ArtworkVisuallySimilarQueryRenderer } from "reaction/Apps/Artwork/Components/ArtworkVisuallySimilar"
import { data as sd } from "sharify"

export const ReactionArtworkVisuallySimilar = props => {
  console.log("ReactionArtworkVisuallySimilar")
  return (
    <Theme>
      <ContextProvider user={sd.CURRENT_USER} mediator={mediator}>
        <Box mb={6}>
          <ArtworkVisuallySimilarQueryRenderer artworkID={props.artworkID} />
        </Box>
      </ContextProvider>
    </Theme>
  )
}
