<template>
  <div>
    <!--<div class="block">-->
      <!--<span class="demonstration">请选择年份</span>-->
      <!--<el-date-picker  @change="yeartime"-->
        <!--v-model="value5"-->
        <!--type="year"-->
        <!--placeholder="选择年">-->
      <!--</el-date-picker>-->
    <!--</div>-->
    <div id="chart" style="margin-top: 20px;  width: 1000px; height: 800px" >
    </div>
  </div>
</template>

<script>
  // var echarts=require('echarts/lib/echarts')
  // require('echarts/lib/chart/pie')
  // require('echarts/lib/chart/bar')
  import echarts from 'echarts'
  import {getLike} from '@/api/like'
  export default {
    name: "like",
    data(){
      return{
        dxy:null,
        wb:null,
        wx:null,
        value5:'2018'
      }
    },
    methods:{
      fetchData(){
        getLike().then(response=>{
          const res=response.data;
          this.dxy=res.dxy.slice(0,11);
          this.wb=res.wb.slice(0,11);
          this.wx=res.wx.slice(0,11);
          this.showchart();
        })
      },
      yeartime(){

      },
      showchart () {
        var myChart = echarts.init(document.getElementById('chart'));
        var option = {
          title: {
            text: '点赞分析图',
            x:'45%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['丁香园','新浪微博','微信公众号'],
            orient:'vertical',
            left:'right',
            top:'100'
          },
          grid: {
            left: '10%',
            right: '14%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'丁香园',
              type:'line',
              //data:[120, 132, 101, 134, 90, 230, 210,330,280,401,160,220]
              data:this.dxy
            },
            {
              name:'新浪微博',
              type:'line',
              //data:[220, 182, 191, 234, 290, 330, 310,200,330,270,203,240]
              data:this.wb
            },
            {
              name:'微信公众号',
              type:'line',
              //data:[150, 232, 201, 154, 190, 237,265,237,168,190,234,365 ]
              data:this.wx
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
