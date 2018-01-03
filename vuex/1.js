//state是唯一的数据源
//Vuex是一棵单一的状态树
//通过getters可以派生出一些新的状态
const store = new Vuex.Store({
    state:{
        todos:[
            {id:1,text:'...',done:true},
            { id: 2, text: '...', done: false }
        ]
    },
    getters:{
        doneTodos:state=>{
            return state.todos.filter(todo=>todo.done)
        }
    }
})


const Counter = {
    template:'<div>{{count}}</div>',
    computed:{
        count(){
            return this.$store.state.count//this.$store就是我们的vuex对象
        }
    }
}

const store = new Vuex.Store({
    state:{
        count:1
    },
    //更改Vuex的store中的状态的唯一方法是提交mutation
    mutations:{
        increment(state){
            state.count++;
        }
    }
})




const Counter = {
    template:`<div>{{count}}</div>`,
    computed:{
        count(){
            return this.$store.state.count
        }
    }
}

const Counter = {
    template:`<div>{{count}}</div>`,
    computed:{
        count(){
            return this.$store.state.count
        }
    }
}


//Getters 通过getters可以派生出一些新的状态
const store = new Vuex.Store({
    state:{
        todos:[
            {id:1,text:'...',done:true},
        ],
        getters:{
            doneTodos:state=>{
                return state.todos.filter(todo=>todo.done)
            }
        }
    }
})