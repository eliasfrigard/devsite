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
            backgroundColor: ['#00374D', '#226CCA', '#743600', '#CD7F00','#00374D', '#226CCA', '#743600', '#CD7F00'],
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