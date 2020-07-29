import { PieSegment } from './pie-segment'
import { style } from './styles/pie-style'

type PieOptions = {
  target: string | HTMLElement
  /**
   * Any valid CSS size property
   * @default '300px'
   */
  size?: string | number
  segments: { percent: number; color?: string; legend?: string }[]
}

class PieInstance {
  private targetElm: HTMLElement
  private pieElm: HTMLElement
  private pieSegments: PieSegment[] = []

  constructor(options: PieOptions) {
    const { size, target, segments } = options

    this.targetElm =
      typeof target === 'string'
        ? document.querySelector(target)
        : target instanceof HTMLElement
        ? target
        : null

    if (!this.targetElm) {
      throw new Error(`Could not find the target element`)
    }

    const { targetElm } = this

    const shadow = targetElm.attachShadow({ mode: 'closed' })

    targetElm.innerHTML = ''

    const segmentsFrag = document.createDocumentFragment()

    let offsetAccum = 0

    for (const seg of segments) {
      const pieSegment = new PieSegment({
        offset: offsetAccum,
        color: seg.color,
        percent: seg.percent,
        legend: seg.legend,
      })

      offsetAccum += seg.percent

      this.pieSegments.push(pieSegment)

      segmentsFrag.appendChild(pieSegment.getElms())
    }

    this.pieElm = document.createElement('div')

    if (size) {
      let cssSize = size

      if (typeof size === 'number') {
        cssSize = size + 'px'
      }

      this.pieElm.style.setProperty('--size', cssSize as string)
    }

    this.pieElm.className = 'pie'

    shadow.appendChild(style)
    shadow.appendChild(this.pieElm)
    this.pieElm.appendChild(segmentsFrag)
    setTimeout(() => {
      this.pieElm.classList.add('ready')
    }, 500)
  }
}

export const PieChart = (options: PieOptions) => new PieInstance(options)
