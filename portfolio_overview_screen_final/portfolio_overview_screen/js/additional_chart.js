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

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart_1", am4charts.PieChart);
chart.padding(0, 0, 0, 0);
chart.margin(0, 0, 0, 0);
// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(20);

// Add data
chart.data = [{
    
  "country": "NEWS",
   "country1": "LATEST HEADLINE",
  "litres": 100,
  "bottles": 100,
  "config": {
    "fill": "#000"
  },
}, {
  "country": "SOCIAL MEDIA ",
  "country1": "LIST OF ACTIVE SOCIAL MEDIA HANDLES",
  "litres": 100,
  "bottles": 100,
}, {
  "country": "BLOG",
  "country1": "LIST OF ACTIVE BLOGS",
  "litres": 100,
  "bottles": 100,
}];


// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";

pieSeries.alignLabels = false;
pieSeries.labels.template.bent = true;
pieSeries.labels.template.radius = -10;
pieSeries.labels.template.padding(0, 0, 0, 0);
pieSeries.labels.template.fontSize = 10;
pieSeries.labels.template.fill = am4core.color("#fff");
pieSeries.ticks.template.disabled = true;

pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 5;

pieSeries.radius = am4core.percent(70);
pieSeries.innerRadius = am4core.percent(10);
// // Disabling labels and ticks on inner circle
// pieSeries.labels.template.disabled = true;
// pieSeries.ticks.template.disabled = true;

// pieSeries2.labels.template.disabled = true;
// pieSeries2.ticks.template.disabled = true;

// // Disable sliding out of slices
// pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
// pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "litres";
pieSeries2.dataFields.category = "country1";


pieSeries2.alignLabels = false;
pieSeries2.labels.template.bent = true;
pieSeries2.labels.template.radius = -10;
pieSeries2.labels.template.fontSize = 10;
pieSeries2.labels.template.padding(0, 0, 0, 0);
pieSeries2.labels.template.fill = am4core.color("#fff");
pieSeries2.ticks.template.disabled = true;




pieSeries2.slices.template.stroke = am4core.color("#fff");
pieSeries2.slices.template.strokeWidth = 5;
pieSeries2.radius = am4core.percent(120);
pieSeries2.innerRadius = am4core.percent(70);
// pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
// pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;

// let label = pieSeries.createChild(am4core.Label);
// label.text = "{values.value.sum}";;
// label.horizontalCenter = "middle";
// label.verticalCenter = "middle";
// label.fontSize = 20;


// Responsive
// chart.responsive.enabled = true;
// chart.responsive.rules.push({
//   relevant: function(target) {
//     if (target.pixelWidth <= 1200) {
//       return true;
//     }
//     return false;
//   },
//   state: function(target, stateId) {
//     if (target instanceof am4charts.PieSeries) {
//       var state = target.states.create(stateId);

//       var labelState = target.labels.template.states.create(stateId);
//       labelState.properties.disabled = false;

//       var tickState = target.ticks.template.states.create(stateId);
//       tickState.properties.disabled = true;
//       return state;
//     }

//     return null;
//   }
// });