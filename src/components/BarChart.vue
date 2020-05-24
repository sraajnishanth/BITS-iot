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

    // var api = "https://5z915pi0ce.execute-api.ap-south-1.amazonaws.com/default/GetCarData?ID=c2";
    var api = "/api/getCarData";
    this.axios.get(api).then((response) => {
      console.log(response.data);

      this.chartdata.labels = [];
      this.chartdata.datasets = [];

      for(var i in response.data) {
        this.chartdata.labels.push('Car ID : ' +response.data[i]["CarID"]);
        this.chartdata.datasets.push({
          label: 'Speed',
          backgroundColor: '#f87979',
          data: [Number(response.data[i]["Speed"]), 0]
        });
        this.chartdata.datasets.push({
          label: 'Time',
          backgroundColor: '#b87977',
          data: [Number(response.data[i]["Time"]), 0]
        })
      }

      this.renderChart(this.chartdata, this.options);
    });
  }
}
</script>
