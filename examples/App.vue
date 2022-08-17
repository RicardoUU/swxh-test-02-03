<script setup lang="ts">
import { ToastPlugin } from '../packages/index-lib';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

function showSuccess() {
  ToastPlugin.success({ content: '成功消息' });
}
function showError() {
  ToastPlugin.error({ content: '失败消息' });
}

const Arr = [
  {
    id: '1',
    text: '菜单1',
    children: [
      {
        id: '2',
        text: '菜单1-1',
        children: [
          { id: '3', text: '菜单1-1-1' },
          { id: '3', text: '菜单1-1-2' }
        ]
      }
    ]
  },
  { id: '2', text: '菜单2' }
];
</script>

<template>
  <r-collapse />
  <div class="tree"><r-tree :data="Arr"></r-tree></div>

  <hr />
  <div>
    <button class="btn success" @click="showSuccess">成功</button>
    <button class="btn danger" @click="showError">失败</button>
    <r-toast content="消息提示！！！！" theme="success"></r-toast>
    <r-toast content="消息提示！！！！" theme="error"></r-toast>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  align-items: center;
} */
.tree {
  position: absolute;
  right: 40%;
}
.btn {
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}

.success {
  background-color: #04aa6d;
} /* Green */
.success:hover {
  background-color: #46a049;
}

.info {
  background-color: #2196f3;
} /* Blue */
.info:hover {
  background: #0b7dda;
}

.warning {
  background-color: #ff9800;
} /* Orange */
.warning:hover {
  background: #e68a00;
}

.danger {
  background-color: #f44336;
} /* Red */
.danger:hover {
  background: #da190b;
}

.default {
  background-color: #e7e7e7;
  color: black;
} /* Gray */
.default:hover {
  background: #ddd;
}
</style>
