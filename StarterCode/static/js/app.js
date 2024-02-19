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
  sampleValues.push(samples[i].sampleValues);
  otuIds.push(samples[i].otuIds);
 otuLabels.push(samples.otuLabels);
  } 
let trace1 = {
        x: sampleValues,
        y: otuIds,
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

  });
  


