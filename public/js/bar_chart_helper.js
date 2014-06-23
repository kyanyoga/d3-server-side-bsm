var d3 = require('d3');
var barChart = require('./bar_chart');

var getBarChart = function (params) {

  var chart = barChart()
    .data(params.data)
    .width(params.width)
    .height(params.height)
    .xAxisLabel(params.xAxisLabel)
    .yAxisLabel(params.yAxisLabel);


  d3.select('body').append('div').attr('id', params.containerId).call(chart);

  var selector = '#' + params.containerId;
  console.log(selector);
  var svg = d3.select(selector).node().outerHTML;
  // console.log(svg);
  d3.select(selector).remove();

  return svg;

};


module.exports = {
  getBarChart: getBarChart
};
