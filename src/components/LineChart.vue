<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  name: 'LineChart',
  data() {
    return {
      // The data for our dataset
      chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },

      chartOptions: {}
    }
  },

  mounted () {
    this.renderChart(this.chartdata, this.chartOptions);
  }
}
</script>
