{ map } = require 'underscore'
Backbone = require 'backbone'
sd = require('sharify').data
template = -> require('./modal.jade') arguments...

module.exports = class VisuallySimilarView extends Backbone.View
  className: 'visually-similar-view'

  events:
    'click .js-pop-up': 'popUp'
    'click input': 'selectAll'

  initialize: ({ artworkID }) ->
    @data =
      sd: sd
      artworkID: artworkID

  popUp: (e) ->
    e.preventDefault()

    $target = $(e.currentTarget)
    $window = $(window)

    wLeft = window?.screenLeft or window.screenX
    wTop = window?.screenTop or window.screenY

    options = map
      status: 1
      width: width = 750
      height: height = 400
      top: (wTop + ($window.height() / 2) - (height / 2)) or 0
      left: (wLeft + ($window.width() / 2) - (width / 2)) or 0
    , (v, k) -> "#{k}=#{v}"
      .join ','

    window.open $target.attr('href'), $target.data('service'), options

    options

  selectAll: (e) ->
    $(e.currentTarget).select()

  render: ->
    @$el.html template @data
    this
