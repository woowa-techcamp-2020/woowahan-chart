const lit = (s: TemplateStringsArray, ...args: unknown[]) =>
  s.map((ss, i) => `${ss}${args[i] || ''}`).join('')

export const css = lit
