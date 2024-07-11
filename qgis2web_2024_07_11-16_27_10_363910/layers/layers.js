ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([15694.648886, 368082.095861, 274007.668850, 561905.934289]);
var wms_layers = [];


        var lyr_OpenStreetMapGrey_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Grey',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMapDark_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap Dark',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_qgis2web_test_punten_3 = new ol.format.GeoJSON();
var features_qgis2web_test_punten_3 = format_qgis2web_test_punten_3.readFeatures(json_qgis2web_test_punten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_qgis2web_test_punten_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgis2web_test_punten_3.addFeatures(features_qgis2web_test_punten_3);
var lyr_qgis2web_test_punten_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qgis2web_test_punten_3, 
                style: style_qgis2web_test_punten_3,
                popuplayertitle: "qgis2web_test_punten",
                interactive: true,
    title: 'qgis2web_test_punten<br />\
    <img src="styles/legend/qgis2web_test_punten_3_0.png" /> 1 - 3<br />\
    <img src="styles/legend/qgis2web_test_punten_3_1.png" /> 3 - 5<br />\
    <img src="styles/legend/qgis2web_test_punten_3_2.png" /> 5 - 7<br />\
    <img src="styles/legend/qgis2web_test_punten_3_3.png" /> 7 - 9<br />\
    <img src="styles/legend/qgis2web_test_punten_3_4.png" /> 9 - 11<br />'
        });
var group_Project = new ol.layer.Group({
                                layers: [lyr_qgis2web_test_punten_3,],
                                fold: "open",
                                title: "Project"});
var group_Achtergrondkaarten = new ol.layer.Group({
                                layers: [lyr_OpenStreetMapGrey_0,lyr_OpenStreetMapDark_1,lyr_OpenStreetMap_2,],
                                fold: "open",
                                title: "Achtergrondkaarten"});

lyr_OpenStreetMapGrey_0.setVisible(false);lyr_OpenStreetMapDark_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_qgis2web_test_punten_3.setVisible(true);
var layersList = [group_Achtergrondkaarten,group_Project];
lyr_qgis2web_test_punten_3.set('fieldAliases', {'id': 'id', 'tekst': 'tekst', });
lyr_qgis2web_test_punten_3.set('fieldImages', {'id': 'TextEdit', 'tekst': 'TextEdit', });
lyr_qgis2web_test_punten_3.set('fieldLabels', {'id': 'no label', 'tekst': 'no label', });
lyr_qgis2web_test_punten_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});