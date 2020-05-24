<template>
  <div class="obd-charts">
    <!-- <BarChart></BarChart> -->
    <LineChart></LineChart>
  </div>
</template>

<script>
// @ is an alias to /src
// import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';

export default {
  name: 'ObdCharts',
  components: {
    // BarChart,
    LineChart
  }
}
</script>
