import { css } from 'src/utils/template-literal'

export const lineChartStyle = document.createElement('style')

lineChartStyle.textContent = css`
  :root {
    --side-gap: 20px;
  }

  .chart-body {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #333;
  }

  @media (prefers-color-scheme: dark) {
    .chart-body {
      color: #f0f0f0;
    }
  }

  .line-chart {
    width: var(--width, 600px);
    height: var(--height, 350px);
    display: flex;
    flex-direction: row;
    transition: width 500ms ease, height 500ms ease;
    padding: 0 20px;
  }

  .spacer {
    flex: 1;
    position: relative;
  }

  .spacer .legend {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-50%) translateY(calc(100% + 16px));
    display: none;
  }

  .spacer:last-child {
    flex: 0;
  }

  .pillar {
    width: 100%;
    height: 100%;
    --percent: 0;
    position: relative;
    /* border-left: 1px solid red; */
    transform: translateY(calc(var(--percent) * -1%));
  }

  .pillar .point {
    border: 3px solid #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    width: var(--point-size, 12px);
    height: var(--point-size, 12px);
    border-radius: 9999px;
    background-color: var(--point-color, #0091fa);
    transform: translateX(-50%) translateY(50%);
  }

  .pillar .line-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--diff, 1) * 100%);
    transform-origin: 0 100%;
    transform: scaleY(var(--reverse, 1));
  }

  .pillar .line-wrapper .vector {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .y-axis {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .y-axis .y-level {
    flex: 1;
    border-bottom: 1px solid #e8e8ea;
    position: relative;
  }

  @media (prefers-color-scheme: dark) {
    .y-axis .y-level {
      border-bottom-color: #333;
    }
  }

  .y-axis .y-level:first-child {
    flex: 0;
  }

  .y-axis .y-level .legend {
    position: absolute;
    bottom: 0;
    right: 100%;
    transform: translateY(50%);
    margin-right: 20px;
  }
`
