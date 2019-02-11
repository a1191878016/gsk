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
    <div id="chart" style="margin-top: 20px;  width: 1000px; height: 800px" />
  </div>
</template>

<script>
// var echarts=require('echarts/lib/echarts')
// require('echarts/lib/chart/pie')
// require('echarts/lib/chart/bar')
import echarts from 'echarts'
import { getRead } from '@/api/read'
export default {
  name: 'Read',
  data() {
    return {
      aids: null,
      gsk: null,
      heart: null,
      hiv: null,
      viiv: null
    }
  },
  mounted() {
    // this.showchart();
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getRead().then(response => {
        const res = response.data
        console.log(res.AIDS)
        this.aids = res.AIDS
        this.gsk = res.GSK
        this.heart = res.HEART
        this.hiv = res.HIV
        this.viiv = res.VIIV
        this.showchart()
      })
    },
    yeartime() {

    },
    showchart() {
      var myChart = echarts.init(document.getElementById('chart'))
      var option = {
        title: {
          text: '阅读分析图',
          x: '45%'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['长效注射,GSK', '长效注射,VIIV', '心脑血管,心脏', 'HIV,男同', '阻断药,艾滋'],
          orient: 'vertical',
          left: 'right',
          top: '100'
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
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '长效注射,GSK',
            type: 'line',
            data: this.gsk
          },
          {
            name: '长效注射,VIIV',
            type: 'line',
            data: this.viiv
          },
          {
            name: '心脑血管,心脏',
            type: 'line',
            data: this.heart
          },
          {
            name: 'HIV,男同',
            type: 'line',
            data: this.hiv
          },
          {
            name: '阻断药,艾滋',
            type: 'line',
            data: this.aids
          }

        ]
      }
      myChart.setOption(option)
    }
  }
}

</script>

<style scoped>

</style>
