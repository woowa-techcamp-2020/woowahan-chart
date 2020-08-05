import { PieChart, LineChart } from './lib/index.js'

window.addEventListener('load', () => {
  PieChart({
    target: '.pie-container',
    size: 300,
    segments: [
      { percent: 55, color: '#05a790', legend: '[%] Water' },
      { percent: 26, color: '#13c1a9', legend: 'Protein [%]' },
      { percent: 14, color: '#27dac1', legend: 'Fat [%]' },
      { percent: 5, color: '#3dead2', legend: 'Mineral [%]' },
    ],
  })

  const lineChart = LineChart({
    target: '.line-chart-container',
    maxY: 5000 * 40,
    intervalY: 5000,
    intervalX: 2,
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
      {
        x: '6/8',
        y: 29500,
      },
      {
        x: '6/9',
        y: 30000,
      },
      {
        x: '6/10',
        y: 30000,
      },
      {
        x: '6/11',
        y: 30000,
      },
      {
        x: '6/12',
        y: 30000,
      },
      {
        x: '6/13',
        y: 30000,
      },
      {
        x: '6/14',
        y: 30000,
      },
      {
        x: '6/15',
        y: 30000,
      },
      {
        x: '6/16',
        y: 25000,
      },
    ],
  })
})
