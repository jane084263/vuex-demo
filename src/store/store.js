import Vue from 'vue'
import Vuex from 'vuex'
import logIn from '../login'
import loanItem from '../loanItem'
console.log(logIn);
console.log(loanItem);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    total:2,
    todos:[
      { id: 1, text: 'first', done: true },
      { id: 2, text: 'second', done: false }
    ],
    // getter 有时候我们需要从store中的state派生出一些状态，多个组件需要用到这个状态
    // 我们可以自己定义getter

  },
  getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      },
      getTodoById: (state) => (id) => {
          return state.todos.find(todo => todo.id === id)
      }
  },
  //mutation  都是同步事务
  mutations: {
    // mutation必须是同步函数，这是一条非常重要的原则！！！
    increment(state,playLoad){
          // 变更状态
          state.count += playLoad.amount;
    }
  },
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了
  actions: {
    // increment(context){
    //     context.commit('increment');}
  // 用解构来简化代码
      // Action 通过 store.dispatch 方法触发
      // increment({commit}){
      //     commit('increment');
      // }
      incrementAsync({commit},playLoad){
        setTimeout(()=>{
            commit('increment',playLoad)
        },1000)
      },
      actionA({commit},playLoad) {
        return new Promise  ((resolve,reject)=>{
            setTimeout(()=>{
              commit('increment',playLoad);
              resolve();
          },2000)
        })
      }
      // 首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
  },
  modules:{
      logIn:logIn,
      loanItem:loanItem,
      account:{
          namespaced:true,
          state:{
              account:'admin',
          },
          getters:{
              isAdmin(){}
          },
          actions:{
              logIn(){
                  console.log('actions login');
              }
          },
          mutations:{
              logIn(){
                  console.log('mutations login');
              }
          },
          modules:{
              myPage:{
                  state:{
                      myPage:'mypage'
                  },
                  getters:{},
                  mutations:{},
                  actions:{
                      nestedAction(){
                          console.log('this is nested action!');
                      }
                  }
              }
          }
      }
  },
})
