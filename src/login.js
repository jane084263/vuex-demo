const logIn = {
    state:{
        account:'jane',
        passward:'123456'
    },
    mutations:{
        changePwd(state){
            state.passward = '23456';
        }
    },
    actions:{
        // 在带有命名空间的模块里访问全局的状态
        getRootState({state,commit,rootState}){
            console.log('state',state);
            console.log('rootState',rootState);
        },
        // 注册全局的action
        rootAction:{
            root:true,
            handler(nameSpacedcontext,playload){
                //命名空间下的局部状态
                console.log(nameSpacedcontext);
            }
        }
    },
    getters:{}
}
export default logIn;