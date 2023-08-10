let map;
let service;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Default to India's coordinates
        zoom: 6,
    });

    service = new google.maps.places.PlacesService(map);

    document.getElementById("searchBtn").addEventListener("click", searchPharmacies);
}

function searchPharmacies() {
    const cityName = document.getElementById("cityInput").value;
    if (cityName) {
        const request = {
            query: `pharmacy in ${cityName}`,
            fields: ["name", "geometry"],
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                clearMarkers();
                displayMarkers(results);
            } else {
                console.error("Place search request failed:", status);
            }
        });
        
    }
}


let markers = [];

function clearMarkers() {
    markers.forEach((marker) => {
        marker.setMap(null);
    });
    markers = [];
}

function displayMarkers(places) {
    places.forEach((place) => {
        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
        });
        markers.push(marker);

        const infowindow = new google.maps.InfoWindow({
            content: place.name,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });

    // Adjust map bounds to fit all markers
    const bounds = new google.maps.LatLngBounds();
    markers.forEach((marker) => {
        bounds.extend(marker.getPosition());
    });
    map.fitBounds(bounds);
}
