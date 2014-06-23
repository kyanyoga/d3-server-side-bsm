var d3 = require('d3');
var fs = require('node-fs');

var getTestHtml = function (params) {
	
  // trying to load different data types
  var tstData =  [];
  console.log(tstData);
  fs.readFile('./public/data/data.tsv', 'utf8', function (err, data) {  
  tstData = data;
  // console.log(tstData);
  });	
 

  //d3.select('body').append('div').attr('id', params.containerId).text("Hello, World!").style("color","blue");
  
  // d3.select('body').append('div').attr('id', params.containerId)
  				  // .append("svg")
  				  // .append("circle")
  				  // .attr("width", 500)
  				  // .attr("height",500)
  				  // .attr("cx", 250)
  			      // .attr("cy", 250)
  			      // .attr("x", 50)
  			      // .attr("fill", "red");
 
  // make svg container
  var svgContainer =   d3.select("body")
  						 .append("svg")
				         .attr('class', 'svg-chart')
				         .attr('width', 200)
				         .attr('height', 200)
		                 .attr("width", 200)
		                 .attr("height", 200);	
                                     
  //Draw the Circle
  var circle = svgContainer.append("circle")
                          .attr("cx", 30)
                          .attr("cy", 30)
                          .attr("r", 20)
                          .attr("fill","blue");
                          
  var tstSVG =  svgContainer.node().outerHTML;
  console.log(tstSVG);
  return tstSVG;
  	  
 				  
  // var selector = '#' + params.containerId;
  // console.log(selector);
  // var svg = d3.select(selector).node().outerHTML;
  // d3.select(selector).remove();
  // console.log(svg);
  // return svg;    

};


module.exports = {
  getTestHtml: getTestHtml
};