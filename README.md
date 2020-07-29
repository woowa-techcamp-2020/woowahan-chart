> 🚨 'woowahan-chart' is now **deperecated**. Use 'woowahan-chart' instead.

<p align="center">
  <img src="https://user-images.githubusercontent.com/19797697/88479003-4e55c580-cf87-11ea-86d6-5da8ff39a025.gif" width="1000" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/19797697/88773191-ca851e80-d1bc-11ea-872c-d8831d5e526c.png" width="1000" />
</p>

<h3 align="center">Woowahan Chart</h3>

<p align="center">
  <a href="https://github.com/woowa-techcamp-2020/woowahan-chart/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/woowa-techcamp-2020/woowahan-chart?color=13c1a9" />
  </a>
  <a href="https://github.com/woowa-techcamp-2020/woowahan-chart/releases">
    <img src="https://img.shields.io/github/v/release/woowa-techcamp-2020/woowahan-chart?include_prereleases&sort=semver&label=version&color=13c1a9" />
  </a>
</p>

<p align="center">A simple HTML chart generator that helps you easily create a simple yet elegant HTML charts just in a second.</p>

---

<p align="center">This library aims to intentionally leverage the power of CSS and DOM API provided by the browsers natively.</p>

---

## v2 migration guide

The exported name `Pie` has been changed to `PieChart` since v2.

```zsh
> npm uninstall woowahan-chart
> npm install woowahan-chart
```

```js
// v1
import { Pie } from 'woowahan-chart'

// v2
import { PieChart } from 'woowahan-chart'
```

---

### ES

**With package managers**

```zsh
> npm install woowahan-chart
```

or

```zsh
> yarn add woowahan-chart
```

then

```js
import { PieChart, LineChart } from 'woowahan-chart'
```

**With browser ES module**

```js
<script src="script.js" type="module"></script>
```

```js
import {
  PieChart,
  LineChart,
} from 'https://unpkg.com/woowahan-chart@latest/lib/index.js'
```

### UMD

```html
<script
  src="https://unpkg.com/woowahan-chart@latest/lib/index.min.js"
  crossorigin
></script>
```

```js
const { PieChart, LineChart } = window.woowahanChart
```

---

## Pie Chart

### Usage (example above)

```js
PieChart({
  target: '.pie-container',
  segments: [
    { percent: 65, color: '#05a790', legend: 'Water [%]' },
    { percent: 16, color: '#13c1a9', legend: 'Protein [%]' },
    { percent: 14, color: '#27dac1', legend: 'Fat [%]' },
    { percent: 5, color: '#3dead2', legend: 'Mineral [%]' },
  ],
})
```

**`PieChart(PieOptions)`**

The **Pie** function accepts pie options then returns a pie instance.

### Options

**`target`**

A target element for a pie chart to be mounted. You can just give a **selector string**.

```js
const pieContainer = document.querySelector('.pie-container')

Pie({
  target: pieContainer,
})
```

or

```js
Pie({
  target: '.pie-container',
})
```

**`size?`**

(Optional) The size of the pie. Any valid CSS size properties like `px`, `em`, `rem`, `%` are available including just a number which converts into pixels.

```js
Pie({
  size: '400px',
})

Pie({
  size: '10vw',
})

Pie({
  size: 200, // Same as '200px'
})
```

**`segments`**

An array of pie segments defined by some segment options.

| Key       | Type     | Description                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `percent` | `number` | The proportion of a segmentation. Max is 100.                                                              |
| `color`   | `string` | The color of the segment in hexadecimal, `rgba()` or any color values accepted by CSS rules.               |
| `legend?` | `string` | (Optional) The name or label of the segment. Use `[%]` inside a legend as a placeholder of the percentage. |

## Line Chart

### Usage (example above)

```js
LineChart({
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
```

### Options

**`target`**

Same as `PieChart`, it accepts both selector string or DOM.

**`maxY`**, **`intervalY`**

`maxY` for the max value for Y axis, and `intervalY` for the lines.

> `maxY` should be divided by `intervalY` exactly without remainder.

**`data`**

An array of points data with x, y values.

| Property |   Type   |
| :------: | :------: |
|   `x`    | `string` |
|   `y`    | `number` |

---

## To Do

### Common

- [x] UMD module

### Pie Chart

- [x] Custom size
- [ ] Display legend on hover (add an option)

### Line Chart

- [x] Implementation
- [ ] Animation on load
- [ ] Manipulate (add, remove, edit) points dynamically

## License

MIT License

Copyright (c) 2020 [jhaemin](https://github.com/jhaemin)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
