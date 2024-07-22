L.CursorHandler = L.Handler.extend({
    addHooks: function () {
        this._popup = new L.Popup();
        this._map.on('mouseover', this._open, this);
        this._map.on('mousemove', this._update, this);
        this._map.on('mouseout', this._close, this);
    },

    removeHooks: function () {
        this._map.off('mouseover', this._open, this);
        this._map.off('mousemove', this._update, this);
        this._map.off('mouseout', this._close, this);
    },
    
    _open: function (e) {
        this._update(e);
        this._popup.openOn(this._map);
    },

    _close: function () {
        this._map.closePopup(this._popup);
    },

    _update: function (e) {
        this._popup.setLatLng(e.latlng)
            .setContent(e.latlng.toString());
    }
});

L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);

var map = new L.Map('leaflet', {
    center: [ 36.823250947956595, 40.6961425911082],
    zoom: 10, // Daha iyi bir başlangıç zoom seviyesi
    cursor: true,
    layers: [
        new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        })
    ]
});

//adding and controlling layers

map.on('layeradd layerremove', function () {

    var bounds = new L.LatLngBounds();
    map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup) {
            bounds.extend(layer.getBounds());
        }
    });
    
    if (bounds.isValid()) {
        map.fitBounds(bounds);

    } else {
        map.fitWorld();
    }
});

var markers = new L.FeatureGroup([
    new L.Marker([38.01372, 39.8881]),
    new L.Marker([37.01538, 42.1694]),
    new L.Marker([36.25781, 39.2561])
]).addTo(map);


var squareCoords = [
    [
        40.05351959021385,
        34.90444132553537
        
      ],
      [
        39.37339464563430,
        34.90444132553537
      ],
      [
        39.373394645634306,
        35.90488787804978
      ],
      [
        40.05351959021385,
        35.90488787804978
      ],
      [
        40.05351959021385,
        34.90444132553537
      ]
];

var polygon = new L.FeatureGroup([
    new L.Polygon(squareCoords)
]).addTo(map);

var control = new L.Control.Layers(null, {
    'Markers': markers,
    'Square Polygon': polygon
}).addTo(map);

