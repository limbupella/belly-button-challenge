// Get the sample.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
// Process the data to get required values and labels

let samples = data.samples;
let bar_values = {};

let sampleValues = [];
let otuIds = [];
let otuLabels = [];

let sampleValues_10 = [];
let otuIds_10 = [];
let otuLabels_10 = [];


for (let i=0; i < samples.length; i++) {
  if (i == 0) {

    let sampleValues = samples[i].sample_values;
    let otuIds = samples[i].otu_ids;
    let otuLabels = samples[i].otu_labels;

    let sampleValues_10 = sampleValues.slice(0, 10).reverse;
    let otuIds_10 = otuIds.slice(0, 10);
    let otuLabels_10 = otuLabels.slice(0, 10).reverse;

    id_bad[samples[i].id] = [sampleValues_10,otuIds_10,otuLabels_10];
    
  // sampleValues.push(samples[i].sampleValues);
  // otuIds.push(samples[i].otuIds);
  // otuLabels.push(samples.otuLabels);
  } 
  function init() {
let trace1 = {
        x: sampleValues_10,
        y: otuLabels_10.map(id => `OTU ${id}`).reverse(),
        text: otuLabels,
        type: 'bar',
        orientation: 'h',
        hoverinfo: 'text+x'
    };

    //Data trace array
    let sampleData = [trace1];
    //Apply a title to the layout
    let layout = {
        title: 'Top 10 OTUs Found',
        xaxis: { title: 'Sample Values' },
        yaxis: { title: 'OTU ID'}
    };
    //Plot the bar chart
    Plotly.newPlot('bar', sampleData, layout); 
  }
}
});

