/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("case_link", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

// Set data
series.data = [{
    "name": "Network #1",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_chrome.svg",
  "children": [{
    "name": "A1",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_chrome.svg",
    "children":[{
    "name": "AA2",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_firefox.svg"
    }]
  }, {
    "name": "A2",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_firefox.svg"
  }, {
    "name": "A3",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_ie.svg"
  }, {
    "name": "A4",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_safari.svg"
  }, {
    "name": "A5",
    "value": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_opera.svg"
  }]
}];

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.id = "id";
series.dataFields.children = "children";
series.dataFields.linkWith = "link";

// enable disable circles 
// series.nodes.template.circle.disabled = true;
// series.nodes.template.outerCircle.disabled = true;


// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.label.valign = "bottom";
series.nodes.template.label.fill = am4core.color("#fff");
series.nodes.template.label.dy = 10;
series.nodes.template.tooltipText = "{name}: [bold]{value}[/]";
series.fontSize = 10;
series.color=am4core.color("#fff");
series.minRadius = 30
series.maxRadius = 30;

// Configure circles
series.nodes.template.circle.fillOpacity = 0.5;

// Configure icons
var icon = series.nodes.template.createChild(am4core.Image);
icon.propertyFields.href = "image";
icon.horizontalCenter = "middle";
icon.verticalCenter = "middle";
icon.width = 40;
icon.height = 40;


series.centerStrength = 0.2;