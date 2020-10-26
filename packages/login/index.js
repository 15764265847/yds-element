import Login from './src/login.vue';

// 这里为了可以使 Vue.use 直接全局安装组件，加了一个 install 方法
// install 方法里也直接使用 Vue.component 直接安装全局组件
Login.install = Vue => {
    Vue.component(Login.name, Login);
}

export default Login;