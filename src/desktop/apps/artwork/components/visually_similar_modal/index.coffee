modalize = require '../../../../components/modalize/index.coffee'
VisuallySimilarView = require './modal.coffee'

module.exports = (options = {}) ->
  view = new VisuallySimilarView options

  modal = modalize view,
    className: 'modalize visually-similar-modal'
    dimensions: width: '100%'

  modal.open()
  modal
