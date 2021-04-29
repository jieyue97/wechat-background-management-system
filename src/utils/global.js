import Vue from 'vue';

// 组件名命名规则
// 优先使用index.vue文件名的上层目录驼峰命名法 如果vue文件名不是index.vue 则取文件名为组件名
const setComponentName = function (filePath) {
    let componentName = ''
    let pathList = filePath.split('/')
    // 获取文件名的目录
    let dirName = pathList[pathList.length - 2]
    // 文件名不是index 则设置组件名为文件名
    if (!(pathList[pathList.length - 1]).includes('index')) {
        let fileName = pathList[pathList.length - 1]
        componentName = fileName.slice(0, fileName.length - 4);
    }
    // 判断是否含有'-' 去掉转驼峰
    else if (dirName.includes('-')) {
        let nameList = dirName.split('-');
        nameList.forEach(name => {
            componentName += name[0].toUpperCase() + name.slice(1).toLowerCase()
        })
    } else {
        componentName = dirName;
    }
    return componentName;
}
// 判断是否需要注册全局组件 需要传入忽略的文件名或文件夹名
const isGlobalComponent = function (filePath, nameIgnoreList) {
    let flag = true;
    nameIgnoreList.forEach(name => {
        if (filePath.includes(name)) {
            flag = false;
        }
    })
    return flag
}
const registerGlobalComponent = function (requireComponent, nameIgnoreList) {
    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const config = requireComponent(fileName)

        isGlobalComponent(fileName, nameIgnoreList) && Vue.component(
            setComponentName(fileName),
            config.default || config)
    })

}

const requireModule = function () {
    // 忽略注册的文件名或目录名 不会注册为全局组件
    const ignoreModule = ['child-components'];
    const requireModule = require.context('../components', true, /\.vue$/)

    registerGlobalComponent(requireModule, ignoreModule)

}

// 执行
requireModule();
