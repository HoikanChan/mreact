import { IElement } from 'share/type';

export function reconcile(element: IElement) {
    return document.createElement(element.type)
}