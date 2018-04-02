var mymap = L.map('llmap').setView([29.975670, 31.131015], 16);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
var marker = L.marker([29.975278, 31.137501]).addTo(mymap);
var polygon = L.polygon([
  [29.980444, 31.139098],
  [29.981633, 31.127296],
  [29.968548, 31.126652]
]).addTo(mymap);
var latlngs = [
  [29.979192, 31.134079],
  [29.975677, 31.130851],
  [29.972351, 31.128159]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
marker.bindPopup("<b>The Great Sphinx of Giza</b><br>A limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human.").openPopup();
polygon.bindPopup("<b>Pyramids of Giza</b><br>The pyramids of Giza consist of 3 great pyramids. The Great Pyramid, built by Khufu, which is the tallest. The Pyramid of Khafre, in the background and the Pyramid of Menkaure, positioned in the front. The Giza Pyramids were built to last forever.");
