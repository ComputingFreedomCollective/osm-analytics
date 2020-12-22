const mapbox_token = 'pk.eyJ1Ijoib3NtLWluIiwiYSI6ImNqcnVxMTNrNTJwbHc0M250anUyOW81MjgifQ.cZnvZEyWT5AzNeO3ajg5tg'

export default {
  'vt-source': 'https://qa.mapmykerala.in', // source of current vector tiles
  'vt-gaps-source': 'https://tiles.osm-analytics.heigit.org/gaps',
  'vt-hist-source': 'https://tiles.osm-analytics.heigit.org', // source of historic vector tiles for compare feature
  'map-background-tile-layer': 'https://tiles.mapmykerala.in/osm/{z}/{x}/{y}.png',
  'map-attribution': '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  'tm-api': 'https://mapmykerala.in/api/v2', // hot tasking manager api
}
