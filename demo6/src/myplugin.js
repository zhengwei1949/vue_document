let MyPlugin = function(){};
MyPlugin.install = function(Vue,options){
    Vue.myGlobalMethod = function(){
        console.log(111);
    }
    Vue.prototype.$myMethod = function(){
        console.log(222);
    }
}

export default MyPlugin;