import isString from 'lodash/isString';

export const getAttach = (node: any, triggerNode?: any): HTMLElement => {
  const attachNode = typeof node === 'function' ? node(triggerNode) : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};
