import _Toast from './toast';
import { withInstall } from '../utils/componentUtil';
import { TdToastProps } from './type';

// import './style';

export * from './type';
export * from './plugin';
export type ToastProps = TdToastProps;

export const Toast = withInstall(_Toast);
export { default as ToastPlugin } from './plugin';
export default Toast;
