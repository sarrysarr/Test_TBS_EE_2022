var wms_layers = [];

var format_TauxBrutdeScolarisationparrgion_0 = new ol.format.GeoJSON();
var features_TauxBrutdeScolarisationparrgion_0 = format_TauxBrutdeScolarisationparrgion_0.readFeatures(json_TauxBrutdeScolarisationparrgion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TauxBrutdeScolarisationparrgion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TauxBrutdeScolarisationparrgion_0.addFeatures(features_TauxBrutdeScolarisationparrgion_0);
var lyr_TauxBrutdeScolarisationparrgion_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TauxBrutdeScolarisationparrgion_0, 
                style: style_TauxBrutdeScolarisationparrgion_0,
                interactive: true,
    title: 'Taux Brut de Scolarisation par région<br />\
    <img src="styles/legend/TauxBrutdeScolarisationparrgion_0_0.png" /> 45,7 - 55,4<br />\
    <img src="styles/legend/TauxBrutdeScolarisationparrgion_0_1.png" /> 55,4 - 69,5<br />\
    <img src="styles/legend/TauxBrutdeScolarisationparrgion_0_2.png" /> 69,5 - 81,2<br />\
    <img src="styles/legend/TauxBrutdeScolarisationparrgion_0_3.png" /> 81,2 - 99,2<br />\
    <img src="styles/legend/TauxBrutdeScolarisationparrgion_0_4.png" /> 99,2 - 117,5<br />'
        });

lyr_TauxBrutdeScolarisationparrgion_0.setVisible(true);
var layersList = [lyr_TauxBrutdeScolarisationparrgion_0];
lyr_TauxBrutdeScolarisationparrgion_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'STATUT': 'STATUT', 'COD_REG': 'COD_REG', 'REG': 'REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_Km2': 'Area_Km2', 'TBS_EE_2022_Total': 'TBS_EE_2022_Total', 'TBS EE_Total': 'TBS EE_Total', });
lyr_TauxBrutdeScolarisationparrgion_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'STATUT': 'TextEdit', 'COD_REG': 'TextEdit', 'REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Km2': 'Range', 'TBS_EE_2022_Total': 'TextEdit', 'TBS EE_Total': 'TextEdit', });
lyr_TauxBrutdeScolarisationparrgion_0.set('fieldLabels', {'fid': 'inline label', 'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'STATUT': 'inline label', 'COD_REG': 'inline label', 'REG': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'Area_Km2': 'inline label', 'TBS_EE_2022_Total': 'inline label', 'TBS EE_Total': 'inline label', });
lyr_TauxBrutdeScolarisationparrgion_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});