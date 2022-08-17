import {
  InfoCircleFilledIcon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  HelpCircleFilledIcon,
  CloseCircleFilledIcon
} from 'tdesign-icons-vue-next';
import './style/index.less';
import { defineComponent, h, onBeforeMount, onMounted, computed, ref } from 'vue';
import { fadeIn, fadeOut } from './animation';

import props from './props';

export default defineComponent({
  name: 'RToast',
  props: {
    ...props,
    placement: String // just for animation
  },
  setup(props, { slots }) {
    const timer = ref(null);
    const toastRef = ref(null);

    const clearTimer = () => {
      props.duration && clearTimeout(timer.value);
    };

    const setTimer = () => {
      if (!props.duration) {
        return;
      }
      timer.value = Number(
        setTimeout(() => {
          clearTimer();
          const msgDom = toastRef.value as HTMLElement;
          fadeOut(msgDom, props.placement, () => {
            props.onDurationEnd?.();
          });
        }, props.duration)
      );
    };
    // 图标
    const renderIcon = () => {
      if (props.icon === false) return;
      if (typeof props.icon === 'function') return props.icon(h);
      if (slots.icon) {
        return slots.icon(null);
      }
      const Icon = {
        info: InfoCircleFilledIcon,
        success: CheckCircleFilledIcon,
        warning: ErrorCircleFilledIcon,
        error: CloseCircleFilledIcon,
        question: HelpCircleFilledIcon
      }[props.theme];
      return <Icon />;
    };

    // 定时清除
    onBeforeMount(() => {
      props.duration && setTimer();
    });

    onMounted(() => {
      const msgDom = toastRef.value;
      fadeIn(msgDom, props.placement);
    });

    return () => (
      <div class="r-toast" ref={toastRef}>
        {renderIcon()}
        <div class="r-toast-content">{props.content}</div>
      </div>
    );
  }
});
