<template>
  <div id="chart" style="margin-top: 20px; margin-left: 100px;  width: 900px; height: 800px" ></div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "filters",
      data(){
        return{
          // builderJson:{
          //   "all":1209,
          //   "charts":{
          //     "gsk":368,
          //     "viiv":289,
          //     "heart":137,
          //     "hiv":259,
          //     "adis":156
          //   }
          // },
          // beforeJson:{
          //   "all":874,
          //   "charts":{
          //     "gsk":312,
          //     "viiv":204,
          //     "heart":89,
          //     "hiv":187,
          //     "adis":73
          //   }
          // },
          pieData:null,
          colorData:null
        }
      },
      methods:{
        showchart () {
          var builderJson={
            "all":1209,
            "charts":{
              "gsk":368,
              "viiv":289,
              "heart":137,
              "hiv":259,
              "adis":156
            }
          };
          var  beforeJson={
            "all":874,
            "charts":{
              "gsk":312,
              "viiv":204,
              "heart":89,
              "hiv":187,
              "adis":73
            }
          }
          var myChart = echarts.init(document.getElementById('chart'));
          myChart.setOption({
            tooltip: {},
            //标签位置
            color: ['#C23531', '#006699', '#61A0A8'],
            title: [
              {
              text: '筛选前数据',
              subtext: '总计 ' + builderJson.all,
              x: '50%',
              textAlign: 'center'
              },
              {
                text:'筛选后数据',
                subtext:'总计 '+beforeJson.all,
                x:'50%',
                y:'53%',
                textAlign:'center'
              },
            ],
            //柱形图图表位置
            grid: [{
              top: 50,
              left:'20%',
              width: '50%',
              bottom: '50%',
              left: 10,
              containLabel: true
            }, {
              top: '60%',
              width: '50%',
              bottom: 0,
              left: 10,
              containLabel: true
            }],
            //柱形图x轴标签
            xAxis: [{
              type: 'value',
              // max: builderJson.all,  //x轴长度
              splitLine: {
                show: false
              }
            }, {
              type: 'value',
              // max: beforeJson.all,
              gridIndex: 1,
              splitLine: {
                show: false
              }
            }],
            //柱形图y轴左侧标签
            yAxis: [{       //y轴上方标签
              type: 'category',
              data: ['长效注射,GSK', '长效注射,VIIV', '心脑血管,心脏', 'HIV,男同', '阻断药,艾滋'],
              axisLabel: {
                interval: 0,
                rotate: 30
              },
              splitLine: {
                show: false
              }
            },
              {       //y轴下方标签
                gridIndex: 1,
                type: 'category',
                data: ['长效注射,GSK', '长效注射,VIIV', '心脑血管,心脏', 'HIV,男同', '阻断药,艾滋'],
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                splitLine: {
                  show: false
                }
              }],
            //数据展示
            series: [
              {
                type: 'bar',
                stack: 'chart',
                z: 3,
                label: {
                  normal: {
                    position: 'right',
                    show: true
                  }
                },
                data: [ 368, 289, 137, 259, 156]
                // data: Object.keys(builderJson.charts).map(function (key) {
                //   return builderJson.charts[key];
                // })
              },
              {

                type: 'bar',
                stack: 'component',
                xAxisIndex: 1,
                yAxisIndex: 1,
                z: 3,
                label: {
                  normal: {
                    position: 'right',
                    show: true
                  }
                },
                data: [312, 204, 89, 187, 82]
              },
              {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '25%'],
                data: [
                  {
                    name:'丁香园',
                    value:286
                  },
                  {
                    name:'新浪微博',
                    value:360
                  },
                  {
                    name:'微信公众号',
                    value:563
                  }
                ]
              }, {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '80%'],
                data: [
                  {
                    name:'丁香园',
                    value:150
                  },
                  {
                    name:'新浪微博',
                    value:255
                  },
                  {
                    name:'微信公众号',
                    value:469
                  }
                ]
              }]
          })
        }
      },
      mounted(){
           this.showchart();

      },
      // created(){
      //   this.showchart();
      // }
    }
</script>

<style scoped>

</style>
