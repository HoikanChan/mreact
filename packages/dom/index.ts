import { IElement } from 'share/type';
import { reconcile } from 'reconciler';

function render(element: IElement, container: HTMLElement) {
    const appNode = reconcile(element);
    container.appendChild(appNode);
}
export default {
    render
}