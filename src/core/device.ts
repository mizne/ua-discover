import ua from './ua'

const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua)
const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua)
const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua)
const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
const isIos = /(iPhone|iPad|iPod|iOS)/i.test(ua)

export default {
  isAndroid,
  isIos,
  isIpad,
  isIpod,
  isIphone
}