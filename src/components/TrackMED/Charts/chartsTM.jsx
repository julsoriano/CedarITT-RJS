// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;

// ##############################
// // // Daily Sales
// #############################

 
const dailySalesChart = {
  data: {
    //labels: ["M", "T", "W", "T", "F", "S", "S"],
    //series: [[12, 17, 7, 17, 23, 18, 38]]
    labels: ["EM", "FC", "FM", "SC", "TT", "VM"],  
    series: [[ 1, 2, 35, 0, 36, 36 ]]  
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high as the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

/*
const getData = () => {
      return fetch('http://localhost:5000/api/owner/getnoofcomps')
      .then(function(response) {
        return response.json();
      })    
    };

const dailySalesChart = {         
  data: {
    labels: ["EM", "FC", "FM", "SC", "TT", "VM"],  
    series: [[ 1, 2, 35, 0, 36, 36 ]]  
    /*
    getData().then(function(ownerComps) {
      var data = {
        labels: ownerComps.map(function(ownerComps) {
          return ownerComps.desc;
        }),
        series: ownerComps.map(function(ownerComps) {
          return ownerComps.noOfComponents;
        })
      };
      
      console.log(data)
      // return "[" + data.series + "]";
      return data;
    
      //var chart = new Chartist.Bar('#chart', data, {
      //  distributeSeries: true
      //  });
      
    },
    
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high as the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
*/
module.exports = {
  dailySalesChart
};
