import Vue from 'vue'
import Vuex from 'vuex'
import Pathify from './plugin/pathify'
import root from './root'

/**
 * 自动加载./module目录中的模块，并自动设置命名空间namespaced为true
 */
const getModules = () => {
  const modules = {};
  const requireModule = require.context('./module', false, /\.js/)
  requireModule.keys().forEach(filename => {
    let name = filename.replace('\./', '');
    name = name.replace('\.js', '')
    const moduleConfig = requireModule(filename)
    moduleConfig.default.namespaced = true
    modules[name] = moduleConfig.default
  });
  return modules;
}

const modules = getModules();

// 打印出所有的模块配置
console.log(modules);

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [Pathify.plugin],
  ...root,
  modules,
})
