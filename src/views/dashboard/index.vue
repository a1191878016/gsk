<template>
  <div class="dashboard-container" style="height: 900px ; background-size: cover;
  margin-top: -10px;background-image: url(./static/svg/admin1.jpg)">
    <!--&lt;!&ndash;<div style="width: 1200px;height: 800px ;background-color: #1f2d3d;margin-left: -15px;margin-top: -30px">&ndash;&gt;-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<img src="/src/icons/svg/admin1.jpg" style=" margin-top: -30px; background-size: 100%; width: 100%;height: 100%"/>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="dashboard-text">name:{{ name }}</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>&ndash;&gt;-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;

  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
