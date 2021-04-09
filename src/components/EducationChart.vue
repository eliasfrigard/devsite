<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  name: 'EducationChart',
  data() {
    return {
      chartdata: {
        labels: ['Javascript', 'Java', 'System Administration', 'Software Engineering', 'Software Projects', 'Security', 'Testing', 'Databases'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#f7df1e', '#ea2d2e', '#2496ed', '#34495e','#f7df1e', '#034078', '#8a6343', '#11924f'],
            data: [22.5, 15, 30, 30, 15, 7.5, 7.5, 7.5]
          }
        ]
      },
      options: {
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#FFF',
          titleFontSize: 16,
          titleFontColor: '#0066ff',
          bodyFontColor: '#000',
          bodyFontSize: 16,
          displayColors: false
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped></style>