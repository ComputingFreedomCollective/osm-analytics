const mapbox_token = 'pk.eyJ1Ijoib3NtLWluIiwiYSI6ImNqcnVxMTNrNTJwbHc0M250anUyOW81MjgifQ.cZnvZEyWT5AzNeO3ajg5tg'

export default {
  'vt-source': 'http://osmstats.cfc.net.in', // source of current vector tiles
  'vt-gaps-source': 'https://tiles.osm-analytics.heigit.org/gaps',
  'vt-hist-source': 'https://tiles.osm-analytics.heigit.org', // source of historic vector tiles for compare feature
  'map-background-tile-layer': 'https://api.mapbox.com/v4/openstreetmap.1b68f018/{z}/{x}/{y}.png?access_token=' + mapbox_token,
  'map-attribution': '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  'tm-api': 'https://tm.icfoss.org/api/v2', // hot tasking manager api
}
