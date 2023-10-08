function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AglHZwDpu8J0k5llaYG64UlF5hMYKwAgr6CvFjlMxgfMTFYqnAJ9t2M9KHlK2P4e',
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        center: new Microsoft.Maps.Location(39.5, -98.4),
        zoom: 4
    });
    //Generate a 50,000 random locations that are within the bounds of the map view.
    var locs = Microsoft.Maps.TestDataGenerator.getLocations(1000, map.getBounds());

    //Load the HeatMap module.
    Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', function () {
        var heatmap = new Microsoft.Maps.HeatMapLayer(locs, {
            intensity: 0.65,
            radius: 100000,
            unit: 'meters', 
            colorGradient: {
                '0': 'Black',
                '0.4': 'Purple',
                '0.6': 'Red',
                '0.8': 'Yellow',
                '1': 'White'
            }
        });
        map.layers.insert(heatmap);
    });
}