let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoia3Vud2FycmFqdmVlcnNpbmdoIiwiYSI6ImNsM24xNXZzNDA4d3IzaW9lNTdvNnFuOW0ifQ.-b7Fqk7Mc6Djud8JkI_FGA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);

var img1 = document.querySelector("#amber")


var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var img3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);
	


var img4 = document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);



var img5 = document.querySelector("#unity")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([73.71688 ,21.84034])
	.addTo(map);

var img6 = document.querySelector("#taj")

var marker6 = new mapboxgl.Marker({
	element: img6
})
	.setLngLat([78.04430 ,27.17583])
	.addTo(map);

var img7 = document.querySelector("#temple")

var marker7 = new mapboxgl.Marker({
	element: img7
})
	.setLngLat([74.87417 ,31.62070])
	.addTo(map);

var img8 = document.querySelector("#minar")

var marker8 = new mapboxgl.Marker({
	element: img8
})
	.setLngLat([77.18706 ,28.52485])
	.addTo(map);

var img9 = document.querySelector("#fort")

var marker9 = new mapboxgl.Marker({
	element: img9
})
	.setLngLat([77.24063 ,28.65774])
	.addTo(map);

var img10 = document.querySelector("#tower")

var marker10 = new mapboxgl.Marker({
	element: img10
})
	.setLngLat([2.29566 ,48.86002])
	.addTo(map);

var img11 = document.querySelector("#burj")

var marker11 = new mapboxgl.Marker({
	element: img11
})
	.setLngLat([55.27317 ,25.19821])
	.addTo(map);

var img12 = document.querySelector("#bridge")

var marker12 = new mapboxgl.Marker({
	element: img12
})
	.setLngLat([-122.49602 ,37.81754])
	.addTo(map);