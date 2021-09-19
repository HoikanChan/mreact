type IElement = {
  type: string | object,
  props: {
    children: any | any[]
  }
}
function createElement(type: string, props: object, ...children: any[]): IElement {
  return {
    type,
    props: {
      ...props,
      children,
    }
  }
}

export default {
  createElement
}