/**
 * 缓存成功的promise
 */
export const memoizePromise = (fn, hasher) => {
  const memo = {}
  const defaultHasher = v => v

  // 默认拿第一个传入的参数做key
  hasher = hasher || defaultHasher

  return (...args) => {
    const key = hasher(...args)
    const val = memo[key]

    if (val) {
      return val
    }

    const promise = fn(...args)
    promise.then(() => {
      memo[key] = promise
    })

    return promise
  }
}

// sep有可能是+号这种正则内置符号
export function join(parts, sep='/') {
  let replacer = new RegExp(escapeRegExp(sep)+'{1,}', 'g')
  return parts.join(sep).replace(replacer, sep)
}

// 把字符串转为安全的正则源码
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
