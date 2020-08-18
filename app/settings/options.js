import settings from './settings'
import * as request from 'superagent'

export function loadLayers(callback) {
  request
  .get(settings['vt-source'] + '/analytics.json')
  .end(function(err, res) {
    if (err) return callback(err)
    callback(null, res.body.layers)
  })
}

export const gapsFilters = [
  {
    name: 'buildings-vs-ghs',
    title: 'Buildings vs. Built-up',
    description: 'OpenStreetMap buildings compared to data of built-up areas from "Global Human Settlement Layer".',
    layers: {
      osm: 'buildings',
      reference: 'ghs-pop'
    }
  }
]

export const overlays = [
  {
    id: 'recency',
    description: 'Edits over Time period'
  },
  // {
  //   id: 'experience',
  //   description: 'Editor Level of Experience'
  // },
]

export const compareTimes = [
  { id: '2019', timestamp: new Date('2019-10-23'), layers: ['buildings', 'highways', 'waterways', 'amenities','schools','quarries','ponds'] },
  { id: 'now',  timestamp: new Date() }
]
