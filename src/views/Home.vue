<template>
    <!--<div class="home">-->
        <!--<div>{{count}}</div>-->
        <!--<div>{{passward}}</div>-->
        <!--<div>{{myPage}}</div>-->
        <!--&lt;!&ndash;<div>{{doneTodos[0].text}}</div>&ndash;&gt;-->
        <!--<div @click="click_add">click add</div>-->
        <!--<div @click="add_async({amount:5})">click add async</div>-->
        <!--<div @click="add_actionA({amount:8})">click add actionA</div>-->
        <!--<div @click="getRootState()">click getRootState</div>-->
        <!--<div @click="rootAction">click rootAction</div>-->
        <!--<div @click="moduleActionA">click moduleActionA</div>-->
        <!--<div @click="moduleMutationA">click moduleMutationA</div>-->
        <!--<div @click="moduleMutationLogin">click moduleMutationLogin</div>-->
        <!--<div @click="nestedAction">click nestedAction</div>-->
    <!--</div>-->
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'home',
        data: function () {
            return {
                localCount: 2
            }
        },
//  computed:mapState({
//      count: state => state.count,
//      countPlusLocalState (state) {
//          return state.count + this.localCount
//      },
//  }),
        // 映射 this.count 为 store.state.count
//    computed:mapState(['count']),
//    对象展开运算符
//    computed:{
//        ...mapGetters([
//            'doneTodos',
//            // ...
//        ])
////         使用对象展开运算符将此对象混入到外部对象中去
//    },
//        computed: {
//            ...mapState({
//                count: state => state.count,
//                passward: state => state.logIn.passward,
//                myPage: state => state.account.myPage.myPage // 嵌套模块的状态的获取方式
//            })
//        },
//        methods: {
//        add_async(){
//           this.$store.dispatch('incrementAsync',{
//               amount:20
//           })
//        },
//            ...mapActions({
//                add_async: 'incrementAsync'
//            }),
//            add_actionA(playload) {
//                this.$store.dispatch('actionA', playload).then(() => {
//                    console.log('sucessed!');
//                })
//            },
//            //如何触发模块里的action
//            getRootState(playload) {
//                this.$store.dispatch('getRootState').then(() => {
//                    console.log('getRootState!');
//                })
//            },
//            //如何触发模块里的action
//            rootAction(playload) {
//                this.$store.dispatch('rootAction').then(() => {
//                    console.log('rootAction!');
//                })
//            },
//            click_add() {
//                // 载荷的使用demo
////            this.$store.commit('increment',{amount:3});
//                //对象风格的提交方式 整个对象都作为载荷传给mutation函数，因此handler保持不变
//                this.$store.commit({
//                    type: 'increment',
//                    amount: 10
//                })
//            },
//            ...mapMutations({
//                add: {
//                    type: 'increment',
//                    amount: 8
//                }
//            }),
            // 带命名空间的状态的触发方式
//            moduleActionA(){
//                this.$store.dispatch('account/logIn');
//            },
//            // 带命名空间的状态的触发方式
//            moduleMutationA(){
//                this.$store.commit('account/logIn');
//            },
//            // 不带命名空间的状态的触发方式
//            moduleMutationLogin(){
//                this.$store.commit('changePwd');
//            },
//            nestedAction(){
//                 return {
//                ...mapActions('state/account/myPage',['nestedAction'])
//                }

//        },

//        mounted() {
//      console.log(mapState(['count','doneTodos']));
//      console.log(this.$store.state.logIn);
//      console.log(this.$store.state.loanItem);
//        }
    }
</script>
