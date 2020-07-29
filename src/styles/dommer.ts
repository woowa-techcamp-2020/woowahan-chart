export const dommer = (markup: TemplateStringsArray | string) => {
  const frag = document.createDocumentFragment()

  const markupStr =
    typeof markup === 'string' ? markup : Array.isArray(markup) ? markup[0] : ''

  let travelNode = new DOMParser().parseFromString(markupStr, 'text/html').body
    .firstElementChild

  while (travelNode) {
    frag.appendChild(travelNode)

    travelNode = travelNode.nextElementSibling
  }

  return frag
}
