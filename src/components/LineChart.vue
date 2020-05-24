<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  name: 'LineChart',
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'Speed',
          backgroundColor: '#f87979',
          data: []
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

      this.chartdata.labels = [];

      try {
        for(var i in response.data.Items) {
          var item = response.data.Items[i];
          this.chartdata.labels.push(item["EventTime"]);
          this.chartdata.datasets[0]['data'].push(Number(item["Speed"]));
        }
      } catch (error) {
        console.log(error);
      }

      this.renderChart(this.chartdata, this.options);
    });

    // this.renderChart(this.chartdata, this.options);
  }
}
</script>
