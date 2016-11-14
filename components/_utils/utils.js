// 返回vue匹配的props的对象
export function defaultProps (props) {
  for (const i in props) {
    if (props.hasOwnProperty(i)) {
      let defaultValue = props[i]

      // 支持String， Number等类型
      if (defaultValue && defaultValue.name && window[defaultValue.name] === defaultValue) {
        props[i] = {
          type: defaultValue,
          default: null
        }
        continue
      }

      let type = toString.call(defaultValue).replace('[object ', '').replace(']', '')

      // 如果传进来的是vue的原生props对象的话
      if (type === 'Object') {
        if (defaultValue.type != null ||
            defaultValue.default != null ||
            defaultValue.validator != null ||
            defaultValue.twoWay != null ||
            defaultValue.required != null) {
          continue
        }
      }

      // 支持 Object和Array的简洁声明方式
      // Todo: 目前看来这样并没有什么卵用
      if (type === 'Array' || type === 'Object') {
        props[i] = {
          type: window[type],
          default: function () {
            return defaultValue
          }
        }
        continue
      }

      props[i] = {
        type: window[type],
        default: defaultValue
      }
    }
  }
  return props
}