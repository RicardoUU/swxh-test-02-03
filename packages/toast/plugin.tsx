import { App, createApp, nextTick, Plugin, ComponentPublicInstance } from 'vue';
import {
  ToastOptions,
  ToastMethod,
  ToastInfoMethod,
  ToastErrorMethod,
  ToastWarningMethod,
  ToastSuccessMethod
} from './type';
import { getAttach } from '../utils/dom';
import Toast from './toast';

interface ExtraApi {
  info: ToastInfoMethod;
  success: ToastSuccessMethod;
  warning: ToastWarningMethod;
  error: ToastErrorMethod;
}
export type ToastPluginType = Plugin & ExtraApi & ToastMethod;
function handleParams(params: ToastOptions): ToastOptions {
  const options: ToastOptions = {
    duration: 3000,
    attach: 'body',
    // zIndex: DEFAULT_Z_INDEX,
    placement: 'top',
    ...params
  };
  options.content = params.content;
  return options;
}
const toastFunc = (props: ToastOptions): any => {
  const options = handleParams(props);
  const { attach, placement } = options;
  const attachDom = getAttach(attach);
  const wrapper = document.createElement('div');

  const instance: any = createApp(Toast, {
    zIndex: options.zIndex,
    placement: options.placement,
    ...options
  }).mount(wrapper);

  // instance.add(options);
  // instanceMap.get(attachDom)[placement] = instance;
  attachDom.appendChild(wrapper);
};

const showToast: ToastMethod = (theme, params, duration) => {
  let options: ToastOptions = { theme };
  if (typeof params === 'string') {
    options.content = params;
  } else if (typeof params === 'object' && !(params instanceof Array)) {
    options = { ...options, ...params };
  }
  (duration || duration === 0) && (options.duration = duration);
  return toastFunc(options);
};

const extraApi: ExtraApi = {
  info: (params, duration) => showToast('info', params, duration),
  success: (params, duration) => showToast('success', params, duration),
  warning: (params, duration) => showToast('warning', params, duration),
  error: (params, duration) => showToast('error', params, duration)
};
const toast: ToastPluginType = showToast as ToastPluginType;

toast.install = (app: App): void => {
  app.config.globalProperties.$message = showToast;
  // 这样定义后，可以通过 this.$message 调用插件
  Object.keys(extraApi).forEach((funcName) => {
    app.config.globalProperties.$message[funcName] = extraApi[funcName];
  });
};

export default toast;
