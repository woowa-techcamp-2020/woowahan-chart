import { PieChart, LineChart } from './lib/index.js'

window.addEventListener('load', () => {
  PieChart({
    target: '.pie-container',
    size: 300,
    segments: [
      { percent: 65, color: '#05a790', legend: 'Water [%]' },
      { percent: 16, color: '#13c1a9', legend: 'Protein [%]' },
      { percent: 14, color: '#27dac1', legend: 'Fat [%]' },
      { percent: 5, color: '#3dead2', legend: 'Mineral [%]' },
    ],
  })

  const lineChart = LineChart({
    target: '.line-chart-container',
    maxY: 30000,
    intervalY: 5000,
    data: [
      {
        x: '6/1',
        y: 10000,
      },
      {
        x: '6/2',
        y: 0,
      },
      {
        x: '6/3',
        y: 5000,
      },
      {
        x: '6/4',
        y: 20000,
      },
      {
        x: '6/5',
        y: 15000,
      },
      {
        x: '6/6',
        y: 17000,
      },
      {
        x: '6/7',
        y: 30000,
      },
    ],
  })
})
