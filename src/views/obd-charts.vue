<template>
  <div class="obd-charts">
    <BarChart></BarChart>
  </div>
</template>

<script>
// @ is an alias to /src
import BarChart from '@/components/BarChart.vue'

export default {
  name: 'ObdCharts',
  components: {
    BarChart
  }
}
</script>
