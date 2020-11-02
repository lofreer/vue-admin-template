import moment from 'moment'

export function randomTimeNumber() {
  return moment().valueOf() + '' + randomNum(0, 100)
}

//生成从minNum到maxNum的随机数
export function randomNum(min, max){
  return Math.floor(Math.random() * (max - min)) + min
}

// 文件扩展名
export function getFileExtendingName (filename) {
  // 文件扩展名匹配正则
  let reg = /\.[^\.]+$/
  let matches = reg.exec(filename)
  if (matches) {
    return matches[0]
  }
  return ''
}

export function resetFontSize(ids, maxSize, maxHeight) {
  let elements = [...document.querySelectorAll(ids)]
  elements.forEach(item => {
    let size = maxSize
    if (item.offsetHeight > maxHeight) {
      while(size--)  {
        if (item.offsetHeight > maxHeight) {
          item.style.fontSize = `${size}px`
        } else {
          break
        }
      }
    }
  })
}

// 倒计时
export function countdowm(el, second) {
	let wait = second || 60;
	let time = function (el) {
		if (wait == 0) {
			el.removeAttribute('disabled')
			el.textContent = '获取验证码'
			wait = second || 60
		} else {
			el.setAttribute('disabled', true)
			el.textContent = wait + 's'
			wait--
			setTimeout(function () { time(el) }, 1000)
		}
  }
	time(el)
}

// 对象转字符串
export function objectToStr(obj) {
  return Object.keys(obj).map(key => (`${key}=${obj[key]}`)).join('&')
}

// 存储本地信息
export function setStorage(key, value) {
	if (typeof value == 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
// 查询本地信息
export function getStorage(key) {
  let value = localStorage.getItem(key)
  let value2 = value
  try {
    value2 = JSON.parse(value)
  } catch(error) {
    value2 = value
  }
  return value2
}
// 删除本地信息
export function removeStorage(key) {
	localStorage.removeItem(key)
}
// 保存cookie
export function setCookie(name, value, min) {
  let expires
  if (min) {
    const date = new Date()
    date.setTime(date.getTime() + (min * 24 * 60 * 60 * 1000))
    expires = `; expires=${date.toUTCString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires}; path=/`
}
// 读取cookie
export function getCookie(name, cookie) {
  const nameEQ = `${name}=`
  const ca = cookie ? cookie.split(';') : document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
// 删除cookie
export function removeCookie(name) {
  setCookie(name, '', -1)
}
// Object Key值对
export function columns(columns = [], source = {}) {
  if (!columns.length) {
    return source
  }
  let values = {}
  columns.forEach(key => {
    values[key] = source[key]
  })
  return values
}
// 权限判断
export function computePermission(code) {
  const permissions = getStorage('admin_permissions')
  if (!permissions || !permissions.length) {
    return false
  }
  return !!permissions.find(v => typeof code === 'string' ? code == v.code : code.test(v.code))
}

export function formatTime(time) {
  let
    s = parseInt(time % 60),
    m = parseInt(time / 60 % 60),
    h = parseInt(time / 60 / 60 % 24),
    d = parseInt(time / 60 / 60 / 24)

  if (d > 0) {
    return `${d}天${h}小时${m}分钟`;
  } else if (h > 0) {
    return `${h}小时${m}分钟`;
  } else if (m > 0) {
    return `${m}分钟`;
  }

  return `${s}秒`;
}
