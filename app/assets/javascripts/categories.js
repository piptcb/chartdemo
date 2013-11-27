
(function($) {

     //When DOM loaded we run the flot plugin
        $(document).ready(function() {
            //generate data points for the graph
            //d1 and d2 is js array which stores the data
    //chart1
            var d1 = [];
            for (var i = 0; i < 14; i += 0.1) {
                d1.push([i, Math.sin(i)]);
            }

            var d2 = [];
            for (var i = 0; i < 14; i += 0.1) {
                d2.push([i, Math.cos(i)]);
            }
             //we call the plot function which creates the graph
            $.plot("#chart1", [ d1, d2 ]);

    //chart2
        var data1 = [
                { label: "Series1",  data: 40},
                { label: "Series2",  data: 40},
                { label: "Series3",  data: 90},
                { label: "Series4",  data: 70},
                { label: "Series5",  data: 80},
                { label: "Series6",  data: 110}
         ];

      //  console.log("chart2");
        $.plot($("#chart2"), data1,
            {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 2/3,
                        formatter: function(label, series){
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                        },
                        background: { opacity: 0.5 }
                    }
                  }
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            legend: {
                show: false
            }
        });

    // chart #3
           // flot simple
    var sin = [];
    var cos = [];

    for (var i = 0; i <= 20; i += 0.5){
      sin.push([i, Math.sin(i)]);
      cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot("#flot-simple", [
      { data: sin, label: "sin(x)"},
      { data: cos, label: "cos(x)"}
    ], {

      colors: ["#00B4FF", "#FF4242"],

      series: {
        lines: {
          show: true
        },
        shadowSize: 2,
        points: {
          show: true
        }
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        tickColor: "#dddddd",
      },
      xaxis: {
        min: 0,
        max: 5
      },
      yaxis: {
        min: -1.2,
        max: 1.2
      }
    });

    function showTooltip(x, y, contents) {
      $("<div id='tooltip'>" + contents + "</div>").css({
        position: "absolute",
        display: "none",
        top: y + 5,
        left: x + 5,
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
      }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#flot-simple").bind("plothover", function (event, pos, item) {

      var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
      $("#hoverdata").text(str);

      if (item) {
        if (previousPoint != item.dataIndex) {

          previousPoint = item.dataIndex;

          $("#tooltip").remove();
          var x = item.datapoint[0].toFixed(2),
          y = item.datapoint[1].toFixed(2);

          showTooltip(item.pageX, item.pageY,
              item.series.label + " of " + x + " = " + y);
        }
      } else {
        $("#tooltip").remove();
        previousPoint = null;
      }
    });


    //chart#4


    // Flot Vertical Bars
    $.plot($("#flot-v-bars"), [ { data: [ [00,20], [20,50], [40,90], [60,30], [80,80], [100,60]] }, { data: [ [10,30], [30,80], [50,50], [70,10], [90,70] ] } ],
      {
        colors: ["#0ABFBC", "#fbc813"],

        series: {
          lines: {
              show: false,
              lineWidth: 2,
               },
          points: {show: false},
          shadowSize: 2,
          bars: {
            show: true,
            barWidth: 3,
            lineWidth: 0,
            fill: 0.8,
          }
        },

        grid: {
          hoverable: true,
          clickable: true,
          show: true,
          borderWidth: 0,
          tickColor: "#d2d2d2",
          labelMargin: 12,
        },

        legend: {
          show: false,
        },

        yaxis: { min: 0, max: 100},
        xaxis: { min: 0, max: 105},
      });

    // Flot Vertical Bars
    $.plot($("#flot-h-bars"), [ { data: [ [20,20], [20,50], [40,00], [60,30], [80,80], [100,70]] }, { data: [ [10,10], [30,100], [50,40], [70,90], [90,60] ] } ],
      {
        colors: ["#0ABFBC", "#fbc813"],

        series: {
          lines: {
              show: false,
              lineWidth: 2,
               },
          points: {show: false},
          shadowSize: 2,
          bars: {
            show: true,
            barWidth: 4,
            lineWidth: 0,
            fill: 0.8,
            horizontal: true,
          }
        },

        grid: {
          hoverable: false,
          show: true,
          borderWidth: 0,
          tickColor: "#dddddd",
          labelMargin: 12,
        },

        legend: {
          show: false,
        },

        yaxis: { min: 0, max: 80},
        xaxis: { min: 0, max: 105},
      });

        });  // end of DOM

})(jQuery);









