var mymap = L.map('llmap').setView([25.740152, 32.601383], 10);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(llmap);
var marker = L.marker(29.975278, 31.137501).addTo(llmap);
var polygon = L.polygon([
  [29.975670, 31.131015],
  [29.979128, 31.134020],
  [29.972399, 31.127990],
]).addTo(llmap);
