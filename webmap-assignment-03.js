var mymap = L.map('llmap').setView([29.975670, 31.131015], 16);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mymap);
var pharpolygon = L.polygon([
  [29.980444, 31.139098],
  [29.981633, 31.127296],
  [29.968548, 31.126652]
]).addTo(mymap);
var pharaohIcon = L.icon({
  iconUrl: 'iwinfr1.github.io/2000px-Pharaoh.svg.png',
  iconSize: [29, 60],
  iconAnchor: [12, 50],
  popupAnchor: [-3, -76]
})
var marker = L.marker([29.975278, 31.137501], {icon: pharaohIcon}).addTo(mymap);
var pharstyled = {
  smoothFactor: '3',
  opacity: '50'
}
var poly = L.polygon(pharstyled).addTo(mymap)
