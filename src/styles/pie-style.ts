const style = document.createElement('style')

style.textContent = `
.pie {
  --size: 300px;
  --transition: transform 1000ms cubic-bezier(0.56, 0.14, 0.07, 1);
  width: var(--size);
  height: var(--size);
  position: relative;
  border-radius: 9999px;
  transition: box-shadow 500ms ease;
}

.pie.ready {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

.pie .legend-helper {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  transform-origin: 0% 50%;
  transform: translateX(50%) rotate(calc(var(--degree, 0) * 1deg));
}

.pie .legend-helper .legend {
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(5px) saturate(1.7);
  padding: 0.3em 0.5em;
  border-radius: 0.2em;
  color: #404040;
  opacity: 0;
  transform: translateX(-50%) translateY(-1em) rotate(calc(var(--degree, 0) * -1deg));
  transition: transform 500ms ease, opacity 500ms ease;
}

.pie.ready .legend-helper .legend {
  transform: translateX(-50%) translateY(-1.3em) rotate(calc(var(--degree, 0) * -1deg));
  opacity: 1;
}

.pie-segment {
  position: absolute;
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: var(--transition);
}

.pie-segment.more-than-fifty .prepend-clip,
.pie-segment.more-than-fifty .append-clip {
  display: block;
}

.pie-segment .body-clip {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 0 50%;
  transform: translateX(50%) rotate(0deg);
  overflow: hidden;
  z-index: 1;
}

.pie-segment .body-clip .fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color, crimson);
  transform-origin: 100% 50%;
  transform: translateX(-100%) rotate(0deg);
  transition: var(--transition);
}

.pie-segment.animate .body-clip .fill {
  transform: translateX(-100%) rotate(calc(var(--degree) * 1deg));
}

.pie-segment .prepend-clip {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 100% 50%;
  transform: translateX(-100%) rotate(0deg);
  overflow: hidden;
  transition: var(--transition);
  display: none;
}

.pie-segment.animate .prepend-clip {
  transform: translateX(-100%) rotate(calc((var(--degree) - 180) * 1deg));
}

.pie-segment .prepend-clip .fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color, crimson);
  transform-origin: 0 50%;
  transform: translateX(100%) rotate(0deg);
  transition: var(--transition);
}

.pie-segment.animate .prepend-clip .fill {
  transform: translateX(100%) rotate(180deg);
}

.pie-segment .append-clip {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 0 50%;
  transform: translateX(50%) rotate(0deg);
  overflow: hidden;
  transition: var(--transition);
  display: none;
}

.pie-segment.animate .append-clip {
  transform: translateX(50%) rotate(calc((var(--degree) - 180) * 1deg));
}

.pie-segment .append-clip .fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color, crimson);
  transform-origin: 100% 50%;
  transform: translateX(-100%) rotate(0deg);
  transition: var(--transition);
}

.pie-segment.animate .append-clip .fill {
  transform: translateX(-100%) rotate(180deg);
}
`

export { style }
