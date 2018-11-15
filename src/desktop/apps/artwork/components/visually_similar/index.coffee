openVisuallySimilarModal = require '../visually_similar_modal/index.coffee'
{ ARTWORK } = require('sharify').data

module.exports = ->
  $('#stitch-artwork-visually-similar').click (e) ->
    e.preventDefault()
    openVisuallySimilarModal(
      artworkID: ARTWORK.id
    )
