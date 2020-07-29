export const validateElement = (target: string | HTMLElement) => {
  const elm =
    typeof target === 'string'
      ? document.querySelector(target)
      : target instanceof HTMLElement
      ? target
      : null

  if (!elm) {
    throw new Error(`Could not find the target element - "${target}"`)
  }

  return elm as HTMLElement
}
