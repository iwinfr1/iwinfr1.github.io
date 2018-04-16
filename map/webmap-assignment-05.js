var mymap = L.map('llmap').setView([30.450171, -91.123621], 12);

var worldbasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
var streetbasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
var topographic = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap);

var newBasemaps = {
  'World Basemap': worldbasemap,
  'Street Basemap': streetbasemap,
  'Topographic': topopraphic
}
L.control.layers(newBasemaps).addTo(mymap)

L.geoJSON(geojsonmap).addTo(mymap)

var myStyle = {
 color: 'purple',
 opacity: '70',
 weight: '4',
 fillColor: 'none'
}
var styoption = {
  style: myStyle,
  onEachFeature: myPopup
 }
L.geoJSON(geojsonmap, myOptions).addTo(mymap)

function myPopup (feature, layer) {
  var Greenlink = feature.properties.GREENLINK
  var Type = feature.properties.TYPE
  var Status = feature.properties.STATUS
layer.bindPopup('In the area of ' + Greenlink + '<br>a(n) ' + Type + '  is ' + Status)
}
