<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'BarChart',
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Harsh Braking',
          backgroundColor: '#f87979',
          data: [40, 20]
        },
        {
          label: 'Over Speeding',
          backgroundColor: '#a87977',
          data: [30, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
