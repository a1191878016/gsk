<template>
  <div id="chart" style="margin-top: 100px; margin-left: 100px;  width: 800px; height: 800px" ></div>
</template>

<script>
  // var echarts=require('echarts/lib/echarts')
  // require('echarts/lib/chart/pie')
  // require('echarts/lib/chart/bar')
  import {getPie} from '@/api/Pie'
  import echarts from 'echarts'
    export default {
        name: "index",
      data(){
          return{
            pieData:null,
            colorData:null
          }
      },
      methods:{
        fetchData(){
          getPie().then(response=>{
            this.pieData=response.data.itemsData;
            this.colorData=response.data.titleData;
            this.showchart()
          })
        },
        showchart () {
          var myChart = echarts.init(document.getElementById('chart'));
          myChart.setOption({
            title : {
              text: '文章来源统计',
              x:'48%'
            },
            color: ['#C23531', '#006699', '#61A0A8'],
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: this.colorData
            },
            label:{
              fontSize:16,
              fontWeight:600
            },
            series : [
              {
                name: '文章来源',
                type: 'pie',
                radius : '55%',
                center: ['55%', '45%'],
                data:this.pieData
              }
            ]
          })
        }
      },
      // mounted(){
      //      this.showchart();

      // },
      created(){
          this.fetchData();
      }

    }

</script>

<style scoped>

</style>
