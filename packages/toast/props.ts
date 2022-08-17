import { PropType } from 'vue';
import { TdToastProps } from './type';

export default {
  /** 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮 */
  closeBtn: {
    type: [String, Boolean, Function] as PropType<TdToastProps['closeBtn']>,
    default: undefined
  },
  /** 用于自定义消息弹出内容 */
  content: {
    type: [String, Function] as PropType<TdToastProps['content']>
  },
  /** 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。 */
  duration: {
    type: Number,
    default: 2000
  },
  /** 用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标 */
  icon: {
    type: [Boolean, Function] as PropType<TdToastProps['icon']>,
    default: true
  },
  /** 消息组件风格 */
  theme: {
    type: String as PropType<TdToastProps['theme']>,
    default: 'info' as TdToastProps['theme'],
    validator(val: TdToastProps['theme']): boolean {
      return ['info', 'success', 'warning', 'error', 'question'].includes(val);
    }
  }
  /** 当关闭按钮存在时，用户点击关闭按钮触发 */
};
