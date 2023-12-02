import React, { useEffect, useRef, useState, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement } from 'chart.js'
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
Chart.defaults.elements.arc.borderWidth = 0;
Chart.defaults.datasets.doughnut.cutout = '85%';
function DoughnutChart() {

    const data = {
      labels: [ "#a6d068", "#318fff"],
      datasets: [{
          data: [89,13],
          backgroundColor: [ "#a6d068","#318fff"],
          hoverBackgroundColor: [ "#a6d068","#318fff"]
      }]
      };

 const innerText = "<strong>someThing</strong>"

    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            // var fontSize = (height / 80).toFixed(2);
            // ctx.font = fontSize ;
            ctx.font = "600 30px Arial";
            ctx.textBaseline = "middle";
            // var text = 'someThing',
            var text  = chart.config.options.elements.center.text,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        },
        beforeInit(chart) {
           // console.log("be");
            // Get reference to the original fit function
            const originalFit = chart.legend.fit;
            // Override the fit function
            chart.legend.fit = function fit() {
              // Call original function and bind scope in order to use `this` correctly inside it
              originalFit.bind(chart.legend)();
              // Change the height as suggested in another answers
              this.width += 30;
            };
          }
    },
    {
        afterUpdate: function(chart) {
          const arcs = chart.getDatasetMeta(0).data;
    
          arcs.forEach(function(arc) {
            arc.round = {
              x: (chart.chartArea.left + chart.chartArea.right) / 2,
              y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
              radius: (arc.outerRadius + arc.innerRadius) / 2,
              thickness: (arc.outerRadius - arc.innerRadius) / 2,
              backgroundColor: arc.options.backgroundColor
            }
          });
        },
        afterDraw: (chart) => {
          const {
            ctx,
            canvas
          } = chart;
    
          chart.getDatasetMeta(0).data.forEach(arc => {
            const startAngle = Math.PI / 2 - arc.startAngle;
            const endAngle = Math.PI / 2 - arc.endAngle;
    
            ctx.save();
            ctx.translate(arc.round.x, arc.round.y);
            ctx.fillStyle = arc.options.backgroundColor;
            ctx.beginPath();
            ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          });
        }
      }

]

    const options={
        maintainAspectRatio: true,
        aspectRatio: 1,
        elements: {
          center: {
              text: '89%'  //set as you wish
          }
      },
        cutoutPercentage: 89,
        plugins: {
            legend: {
              display: false
            },
            
        }
    }
    console.log("8888888",data);

    return (
        <div className='doughnut_chart'>
            <div className='doughnut_chart_area'>
                <Doughnut 
                    type="doughnut"
                    data={data}
                    options={options}
                    plugins={plugins}
                />
            </div>
            
        </div>
    );
}

export default DoughnutChart;