type IElement = {
  type: string | object,
  props: {
    children: any | any[]
  }
}
export function createElement(type: string, props: object, ...children: any[]): IElement {
  return {
    type,
    props: {
      ...props,
      children,
    }
  }
}