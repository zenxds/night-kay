const head = document.head || document.getElementsByTagName("head")[0]

export default function loadScript(url, callback) {
  let node = document.createElement("script")

  node.charset = 'utf-8'
  node.async = true
  node.setAttribute('crossorigin', 'anonymous')
  // node.crossOrigin = 'anonymous'

  if ('onload' in node) {
    node.onload = onload
  } else {
    node.onreadystatechange = function () {
      if (/loaded|complete/.test(node.readyState)) {
        onload()
      }
    }
  }

  function onload() {
    node.onreadystatechange = node.onload = null
    head.removeChild(node)
    node = null
    callback()
  }

  node.src = url
  head.appendChild(node)
}
