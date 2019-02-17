<template>
    <div class="todomvc">
        <header class="header">
            <h3>todos</h3>
            <input type="text" autofocus autocomplete="off" placeholder="what's need to be done" @keyup.enter="addTodo">
        </header>
        <section class="main">
            <div class="wrapbox">
                <input type="checkbox" id="toggle-all" class="toggle-all" :checked="allChecked" @change="toggleAll(!allChecked)">
                <label for="toggle-all" :class="allChecked?'green':'gray'">^</label>
            </div>
            <ul>
                <li v-for="(todo,index) in filterTodos" :key="index">
                    <div class="view">
                        <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
                        <label for="" @dblclick="editing=true">
                            {{todo.text}}
                        </label>
                        <button class="destroy" @click="removeTodo(todo)">X</button>
                    </div>
                    <input type="text" class="edit" v-show="editing"
                           :value="todo.text"
                           @keyup.enter="doneEdit($event,todo)"
                           @keyup.esc = "cancelEdit($event,todo)"
                           @blur="doneEdit($event,todo)"
                    >
                </li>
            </ul>
        </section>
        <footer class="footer">
            <div>
                <span>
                    <strong>{{remaining}}</strong>
                    {{remaining | pluralize('item')}}left
                </span>
                <ul>
                    <li v-for="(val,key) in filters" @click="visibility = key">
                        <a href="javascript:;" :class="[visibility == key?'green':'gray']">
                            {{key | capitalize}}
                        </a>
                    </li>
                </ul>
                <button v-show="todos.length > remaining" @click="clearCompleted">clear all completed</button>
            </div>
        </footer>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
    }
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'todomvc',
        data: function () {
            return {
                visibility: 'all',
                filters: filters,
                editing:false,
            }
        },
        computed: {
            todos: function () {
                return this.$store.state.todos;
            },
            filterTodos: function () {
                return this.filters[this.visibility](this.todos)
            },
            remaining: function () {
                return this.todos.filter(todo => !todo.done).length
            },
            allChecked:function () {
                return this.todos.every(todo=>todo.done);
            }
        },
        filters: {
            pluralize: (n, w) => n === 1 ? w : (w + 's'),
            capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
        },
        methods: {
            ...mapActions(['toggleTodo','toggleAll','clearCompleted']),
            addTodo(e) {
                const text = e.target.value;
                if (text.trim()) {
                    this.$store.dispatch('addTodo', text)
                }
                e.target.value = '';
            },
            removeTodo(todo) {
                this.$store.dispatch('removeTodo',todo)
            },
            doneEdit(e,todo){
                this.editing = false;
                let value = e.target.value.trim();
                console.log(value);
                console.log(todo)
                if (!value) {
                    this.removeTodo(todo)
                } else {
                    this.$store.dispatch('editTodo',{todo,value})
                }

            },

            cancelEdit(todo){
                 e.target.value = todo.text;
                 this.editing = false
            }
        }

    }
</script>
<style lang="scss">
    html, body {
        width: 100%;
        margin: 0 auto;
        .green{
            color: green!important;
        }
        .gray {
            color: gray!important;
        }
        .gray{}
        .main {
            position: relative;
            .wrapbox {
                height:14px;
                line-height:14px;
                position: relative;
                .toggle-all {
                    width: 1px;
                    height: 1px;
                    border: none;
                    opacity: 0;
                    position: absolute;
                    right: 53%;
                    bottom: -10px;
                    z-index: 1;
                }
                label {
                    position: absolute;
                    right: 53%;
                    bottom: -10px;
                    z-index:2;
                    font-size:30px;
                }
            }

            ul {
                li {
                    position: relative;
                    list-style-type: none;
                    .destroy {
                        display: none;
                    }
                    &:hover {
                        .destroy {
                            display: inline-block;
                        }
                    }
                    .edit {
                        position: absolute;
                        z-index:3;
                        top: 0;
                        left:44%;

                    }
                }
            }
        }
        .footer {
            div {
                width: 40%;
                height: 40px;
                line-height: 40px;
                margin: 0 auto;
                span {
                    float: left;
                }
                ul {
                    margin: 0;
                    float: left;
                    li {
                        float: left;
                        margin-right: 20px;
                    }
                ;
                }
                a {
                    text-decoration: none;
                    color: #000;
                }
            }
        }
    }

</style>
