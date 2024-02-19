// Get the sample.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
// Process the data to get required values and labels

let samples = data.samples;

let sampleValues = [];
let otuIds = [];
let otuLabels = [];

for (let i=0; i < samples.length; i++) {
  if (i == 0) {
  let values = samples.sampleValues;
  let ids = samples.otuIds;
  let labels = samples.otuLabels;
  } }
sampleValues.push(values);
otuIds.push(ids);
otuLabels.push(labels);
  });
let trace1 = {
        // Use sample_values as the values for the bar chart.
        x: Values,
        // Use otu_ids as the labels for the bar chart.
        y: OtuIds,
        // Use otu_labels as the hovertext for the chart.
        text: init_barOtuLabels,
        type: 'bar',
        orientation: 'h',
        hoverinfo: 'text+x'
    };
    //Data trace array
    let sampleData = [trace1];
    //Apply a title to the layout
    let layout = {
        title: 'Top 10 OTUs Found in an Individual',
        xaxis: { title: 'Sample Values' },
        yaxis: { title: 'OTU ID'}
    };
    //Plot the bar chart
    Plotly.newPlot('bar', sampleData, layout); 
  


