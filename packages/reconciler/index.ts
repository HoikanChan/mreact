import { IElement } from 'share/type';

export function reconcile(element: IElement | string) {
    let node;
    if (typeof element === 'string') {
        node = document.createTextNode(element);
    } else {
        node = document.createElement(element.type);
        if(element?.props.children.length) {
            element.props.children.forEach(ele => {
                const childNode = reconcile(ele);
                node.appendChild(childNode);
            })
        }
    }
    return node;
}