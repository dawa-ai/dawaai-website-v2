// // Initialize the Google Map
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 5,
//       center: { lat: 20.5937, lng: 78.9629 }, // Default center of India
//     });
  
//     // Load the JSON data from json.js using Fetch API
//     fetch('json.js')
//       .then(response => response.json())
//       .then(jsonData => {
//         // Loop through the data and create markers for each hospital
//         jsonData.data.forEach((hospital) => {
//           const { Location_Coordinates, hospital_name, hospital_location } = hospital;
//           if (Location_Coordinates) {
//             const marker = new google.maps.Marker({
//               position: Location_Coordinates,
//               map: map,
//               title: hospital_name,
//             });
  
//             // Create info window for the marker
//             const infowindow = new google.maps.InfoWindow({
//               content: `<strong>${hospital_name}</strong><br>${hospital_location}`,
//             });
  
//             // Add click event listener to open info window on marker click
//             marker.addListener("click", () => {
//               infowindow.open(map, marker);
//             });
//           }
//         });
//       })
//       .catch(error => {
//         console.error('Error loading JSON data:', error);
//       });
//   }
  



// let map;
// let markers = [];

// function initMap() {
//     const indiaCenter = [20.5937, 78.9629];
//     map = L.map('map').setView(indiaCenter, 5);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     data.forEach(hospital => {
//         if (hospital.Location_Coordinates) {
//             const marker = L.marker(hospital.Location_Coordinates)
//                 .addTo(map)
//                 .bindPopup(`<b>${hospital.hospital_name}</b><br>${hospital.hospital_location}<br>Pincode: ${hospital.Pincode}`)
//                 .on('click', () => {
//                     showDetails(hospital);
//                 });

//             markers.push(marker);
//         }
//     });

//     // Search functionality
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('input', () => {
//         const searchTerm = searchInput.value.toLowerCase();
//         markers.forEach(marker => {
//             const hospitalName = marker.getPopup().getContent().toLowerCase();
//             if (hospitalName.includes(searchTerm)) {
//                 marker.setOpacity(1);
//             } else {
//                 marker.setOpacity(0);
//             }
//         });
//     });
// }

// function showDetails(hospital) {
//     const detailsDiv = document.getElementById('details');
//     detailsDiv.innerHTML = `
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${hospital.hospital_name}</h5>
//                 <p class="card-text">${hospital.hospital_location}</p>
//                 <p class="card-text">Pincode: ${hospital.Pincode}</p>
//             </div>
//         </div>
//     `;
// }

// window.onload = initMap;