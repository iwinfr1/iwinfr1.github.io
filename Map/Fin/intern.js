var mymap = L.map('lnmap').setView([28.407111, -43.910567], 3);

let myworld = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
let myde = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
let myLandscape = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png').addTo(mymap);

let newBasemaps = {
  'World Basemap': myworld,
  'Light Basemap': myde,
  'Landscape Basemap': myLandscape
}
L.control.layers(newBasemaps).addTo(mymap)

L.geoJSON(geojsonmap).addTo(mymap)

function newIcon (geometry, feature) {
  let treeIcon = L.icon.Default ({
    iconUrl: 'blackcircle.PNG',
    iconSize: [30, 65],
    iconAnchor: [10, 20],
    popupAnchor: [-3, -76]
  })
  return L.marker(feature, { icon: treeIcon })
}
let lOptions = {
  geometryToLayer: newIcon,
}
L.geoJSON(geojsonmap, lOptions).addTo(mymap);


function onEachFeature(feature, layer) {
    layer.bindPopup("<b>Internship:</b>" + feature.properties.Internship + "<br><br>" + "<b>Category:</b>" + feature.properties.Category + "<br><br>" + "<b>Description:</b>" + feature.properties.Description + "<br><br>" + "<b>Website:</b>" + feature.properties.Website + "<br><br>" + "<b>Location:</b>" + feature.properties.Location);
  }
  var myStyle = {
 size: '4',
 weight: '4',
 fillColor: 'none'
}
var myOptions = {
  style: myStyle,
  onEachFeature: onEachFeature
 }
L.geoJSON(geojsonmap, myOptions).addTo(mymap)

function onMapClick(e) {
    alert("Map was clicked at " + e.latlng);
}
mymap.on('click', onMapClick);
