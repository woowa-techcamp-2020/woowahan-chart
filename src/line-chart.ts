import { validateElement } from './utils/validate-element'
import { dommer } from './styles/dommer'
import { lineChartStyle } from './styles/line-chart-style'
import { html, render } from '../node_modules/lit-html'
import { css } from './utils/template-literal'

type LineChartDatum = {
  x: string
  y: number
}

type LineChartData = LineChartDatum[]

type LineChartOptions = {
  target: string | HTMLElement
  data: LineChartData
  maxY: number
  intervalY: number
  intervalX?: number
}

class LineChartInstance {
  private targetElm: HTMLElement
  private lineChartElm: HTMLElement
  private chartData: LineChartData
  private maxY: number
  private intervalY: number
  private intervalX?: number

  constructor(options: LineChartOptions) {
    this.targetElm = validateElement(options.target)
    this.chartData = options.data
    this.maxY =
      options.maxY ??
      options.data.reduce((prev, curr) => Math.max(prev, curr.y), 0)

    this.intervalY = options.intervalY
    this.intervalX = options.intervalX

    this.mount()
  }

  private mount() {
    this.targetElm.innerHTML = ''

    const shadow = this.targetElm.attachShadow({ mode: 'closed' })

    shadow.appendChild(lineChartStyle)

    const nthChildStyle = document.createElement('style')

    nthChildStyle.textContent = css`
      .spacer:nth-child(${this.intervalX ?? ''}n + 1) .legend {
        display: block;
      }
    `

    shadow.appendChild(nthChildStyle)

    const chartBody = dommer`<div class="chart-body" />`.firstElementChild

    shadow.appendChild(chartBody)

    const yLevels = []

    let level = 0

    while (this.maxY >= level) {
      yLevels.push(level)
      level += this.intervalY
    }

    const markUp = (data: LineChartData) => html`
      <div class="y-axis">
        ${yLevels.reverse().map(
          (yL) => html`
            <div class="y-level">
              <label class="legend">${yL}</label>
            </div>
          `
        )}
      </div>
      <div class="line-chart">
        ${data.map((d, i) => {
          const diff =
            Math.abs(d.y - (data[i + 1] ? data[i + 1].y : 0)) / this.maxY

          return html`
            <div class="spacer">
              <div class="pillar" style="--percent: ${(d.y / this.maxY) * 100}">
                ${i !== data.length - 1
                  ? html`
                      <div
                        class="line-wrapper"
                        style="--diff: ${diff}; --reverse: ${d.y >
                        (data[i + 1] ? data[i + 1].y : 0)
                          ? -1
                          : 1}; ${diff === 0
                          ? 'height: 2px; background: #0091FA; transform: translateY(1px);'
                          : ''}"
                      >
                        <svg class="vector">
                          <line
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                            stroke="#0091FA"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    `
                  : ''}
                <div class="point"></div>
              </div>

              <label class="legend">${d.x}</label>
            </div>
          `
        })}
      </div>
    `

    render(markUp(this.chartData), chartBody)
  }
}

export const LineChart = (options: LineChartOptions) =>
  new LineChartInstance(options)
