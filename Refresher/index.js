// import plotly.js
/*const plotScript = document.createElement("script");
plotScript.src = "https://cdn.plot.ly/plotly-latest.min.js";
plotScript.async = true;
plotScript.onload = () => {
  // The script has loaded; you can now use Plotly functions
  // Initialize your Plotly charts or perform other actions here

    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
    x:xArray,
    y:yArray,
    type:"bar",
    orientation:"v",//v or h
    marker: {color:"rgba(0,0,255,0.6)"}
    }];

    const layout = {title:"World Wide Wine Production"};

    Plotly.newPlot("myPlot", data, layout);
};
document.body.appendChild(plotScript);*/

/*
For horizontal, make x, y and vice versa
const xArray = [55, 49, 44, 24, 15];
const yArray = ["Italy","France","Spain","USA","Argentina"];

const data = [{
  x: xArray,
  y: yArray,
  type: "bar",
  orientation: "h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);

*/

// pIE CHART

document.addEventListener('DOMContentLoaded', () => {
    const myPlot2 = document.getElementById('myPlot2');

    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const layout = {title:"World Wide Wine Production"};

    const data = [{labels:xArray, values:yArray, type:"pie"}];

  Plotly.newPlot("myPlot", data, layout);
});

