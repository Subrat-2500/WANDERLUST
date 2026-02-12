const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});


const map = L.map('map', {
  center: [coordinates[1], coordinates[0]],
  zoom: 9,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

console.log(coordinates);

// const marker=L.marker(coordinates)//Listing.GEOMETRY.COORDINATES
//             .addTo(map);

L.marker([coordinates[1], coordinates[0]],{ icon: redIcon })
.bindPopup(`<h4>${user}</h4><p>Exact Location will be Provided after booking`, { offset: [0, -25] })
  .openPopup()
  .addTo(map);




