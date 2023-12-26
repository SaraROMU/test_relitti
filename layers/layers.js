var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Rinvenimentisottomarinisporadici_1 = new ol.format.GeoJSON();
var features_Rinvenimentisottomarinisporadici_1 = format_Rinvenimentisottomarinisporadici_1.readFeatures(json_Rinvenimentisottomarinisporadici_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rinvenimentisottomarinisporadici_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rinvenimentisottomarinisporadici_1.addFeatures(features_Rinvenimentisottomarinisporadici_1);
var lyr_Rinvenimentisottomarinisporadici_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rinvenimentisottomarinisporadici_1, 
                style: style_Rinvenimentisottomarinisporadici_1,
                interactive: true,
                title: '<img src="styles/legend/Rinvenimentisottomarinisporadici_1.png" /> Rinvenimenti sottomarini/sporadici'
            });
var format_Relitti_2 = new ol.format.GeoJSON();
var features_Relitti_2 = format_Relitti_2.readFeatures(json_Relitti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relitti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relitti_2.addFeatures(features_Relitti_2);
var lyr_Relitti_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Relitti_2, 
                style: style_Relitti_2,
                interactive: true,
                title: '<img src="styles/legend/Relitti_2.png" /> Relitti'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Rinvenimentisottomarinisporadici_1.setVisible(true);lyr_Relitti_2.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Rinvenimentisottomarinisporadici_1,lyr_Relitti_2];
lyr_Rinvenimentisottomarinisporadici_1.set('fieldAliases', {'ID': 'Numero elenco', 'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Nome', 'SITO_1': 'SITO_1', 'RELITTO': 'RELITTO', 'SPORADICO': 'SPORADICO', 'DATA': 'Data inizio', 'DATA FINE': 'Data fine', 'MERCI ETRUSCHE': 'Merci etrusche', 'MERCI NON ETRUSCHE O DUBBIE': 'Merci non etrusche', 'BIBLIOGRAFIA': 'Bibliografia', 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO': 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO', });
lyr_Relitti_2.set('fieldAliases', {'ID': 'Numero elenco', 'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Nome', 'SITO_1': 'SITO_1', 'RELITTO': 'RELITTO', 'SPORADICO': 'SPORADICO', 'DATA': 'Data inizio', 'DATA FINE': 'Data fine', 'MERCI ETRUSCHE': 'Merci etrusche', 'MERCI NON ETRUSCHE O DUBBIE': 'Merci non etrusche', 'BIBLIOGRAFIA': 'Bibliografia', 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO': 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO', });
lyr_Rinvenimentisottomarinisporadici_1.set('fieldImages', {'ID': 'Range', 'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'SITO_1': 'Hidden', 'RELITTO': 'Hidden', 'SPORADICO': 'Hidden', 'DATA': 'TextEdit', 'DATA FINE': 'Range', 'MERCI ETRUSCHE': 'TextEdit', 'MERCI NON ETRUSCHE O DUBBIE': 'TextEdit', 'BIBLIOGRAFIA': 'TextEdit', 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO': 'Hidden', });
lyr_Relitti_2.set('fieldImages', {'ID': 'Range', 'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'SITO_1': 'Hidden', 'RELITTO': 'Hidden', 'SPORADICO': 'Hidden', 'DATA': 'TextEdit', 'DATA FINE': 'Range', 'MERCI ETRUSCHE': 'TextEdit', 'MERCI NON ETRUSCHE O DUBBIE': 'TextEdit', 'BIBLIOGRAFIA': 'TextEdit', 'OSSERVAZIONI/INTERPRETAZIONE DEL RELITTO': 'Hidden', });
lyr_Rinvenimentisottomarinisporadici_1.set('fieldLabels', {'ID': 'inline label', 'SITO': 'inline label', 'DATA': 'inline label', 'DATA FINE': 'inline label', 'MERCI ETRUSCHE': 'inline label', 'MERCI NON ETRUSCHE O DUBBIE': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Relitti_2.set('fieldLabels', {'ID': 'inline label', 'SITO': 'inline label', 'DATA': 'inline label', 'DATA FINE': 'inline label', 'MERCI ETRUSCHE': 'inline label', 'MERCI NON ETRUSCHE O DUBBIE': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Relitti_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});