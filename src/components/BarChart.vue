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

      try {
        for(var i in response.data.Items) {
          var item = response.data.Items[i];
          this.chartdata.labels.push('Car ID : ' + item["CarID"]);

          this.chartdata.datasets.push({
            label: 'Speed',
            backgroundColor: '#f87979',
            data: [Number(item["Speed"]), 0]
          });

          this.chartdata.datasets.push({
            label: 'Event Time',
            backgroundColor: '#b87977',
            data: [Number(item["EventTime"]), 0]
          })
        }
      } catch (error) {
        console.log(error);
      }

      this.renderChart(this.chartdata, this.options);
    });

  }
}
</script>
