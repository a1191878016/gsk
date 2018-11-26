<template>
  <div id="chart" style="margin-top: 20px;  width: 1000px; height: 800px" ></div>
</template>

<script>
  // var echarts=require('echarts/lib/echarts')
  // require('echarts/lib/chart/pie')
  // require('echarts/lib/chart/bar')
  import echarts from 'echarts'
  import {getBar} from '@/api/bar'
  export default {
    name: "index",
    data(){
      return{
        guanjianci:null,
        dxy:null,
        wb:null,
        wx:null
      }
    },
    methods:{
      fetchData(){
        getBar().then(response=>{
          const res=response.data;
          this.guanjianci=res.keyWordsList;
          console.log(res)
          this.dxy=res.dxy;
          this.wb=res.wb;
          this.wx=res.wx;
          this.showchart();
        })

      },
      showchart () {
        var myChart = echarts.init(document.getElementById('chart'));
        var option = {

          title:{
            text:'关键词数量统计',
            x:'48%'
          },
          grid: {
            left: '15%',
            right: '12%',
            bottom: '3%',
            containLabel: true
          },
          color: ['#C23531', '#006699', '#61A0A8'],
          tooltip: {    //鼠标悬浮字体框
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {  //顶部颜色区分
            data: ['丁香园','新浪微博','微信公众号'],
            orient:'vertical',
            left:'right',
            top:'100',

          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: this.guanjianci
              // data:['1','2','3','4','5','6','7']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '丁香园',
              type: 'bar',
              barGap: 0,
              data: this.dxy
            },
            {
              name: '新浪微博',
              type: 'bar',
              data: this.wb
            },
            {
              name: '微信公众号',
              type: 'bar',
              data: this.wx
            }
          ]
        };
        myChart.setOption(option)
      }
    },
    mounted(){
      //this.showchart();
    },
    created(){
      this.fetchData();
    }
  }

</script>

<style scoped>

</style>
