const head = document.head || document.getElementsByTagName("head")[0]

export default function loadCss(url) {
  return new Promise((resolve, reject) => {
    let node = document.createElement('link')

    node.charset = 'utf-8'
    node.rel = 'stylesheet'

    if ('onload' in node) {
      node.onload = onload
    } else {
      node.onreadystatechange = function () {
        if (/loaded|complete/.test(node.readyState)) {
          onload()
        }
      }
    }

    if ('onerror' in node) {
      node.onerror = reject
    }

    function onload() {
      node.onload = node.onreadystatechange = null
      node = null

      resolve()
    }

    node.href = url
    head.appendChild(node)
  })
}
