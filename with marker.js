
      // Create a Leaflet map object
      var map = L.map("mapid").setView([26.8467, 80.9462], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18,
      }).addTo(map);

      // Add a marker with your photo and name
      var marker = L.marker([26.8467, 80.9462]).addTo(map);
      marker
        .bindPopup("<b>Shraddha</b><br><img src='shrad.png' width='60'>")
        .openPopup();

 
