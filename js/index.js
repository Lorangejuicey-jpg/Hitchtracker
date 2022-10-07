let map = L.map("map", {    // map maken
    layers: MQ.mapLayer(),
    center: [52.1087,5.3174],
    zoom: 12,
  });


  const route = (e) => {
    map.remove();   // map verwijderen
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;

    map = L.map("map", {
      layers: MQ.mapLayer(),
      center: [52.1087,5.3174],
      zoom: 12,
    });

    var dir = MQ.routing.directions();

    dir.route({ // route ophalen
      locations: [start, end],
    });

    let arrLocations = "";
    let distance = 0;
    dir.on("success", function (e) {
      if (e.route.shape) {  // route informatie op de pagina zetten
        // route
        const mappings = e.route.legs[0].maneuvers;

        for (var key in mappings) {

          var obj = mappings[key];
          arrLocations +=
            "<div class='route border-bottom'>" + obj.distance + "KM " + obj.narrative + "</div>";
          distance = distance + obj.distance;
        }
        document.getElementById("routes").innerHTML = arrLocations;
        document.getElementById('KM').innerHTML = "KM:"+ distance.toFixed(2);
        const price = distance * 1.05;
        document.getElementById('price').innerHTML = "Prijs:" + price.toFixed(2);
        document.getElementById('endPrice').innerHTML = "Uiteindelijke kosten:" + price.toFixed(2);
      }
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    });

    map.addLayer(   // route displayen
      new CustomRouteLayer({
        directions: dir,
        fitBounds: true,
      })
    );
  };