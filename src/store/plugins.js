import {STORAGE_KEY} from './mutations'
const localStoragePlugin = store =>{
    // 结构赋值出todos
    store.subscribe((mutation,{todos})=>{
        console.log(todos);
        return window.localStorage.setItem(STORAGE_KEY,JSON.stringify(todos))
        }
    )
}


export default [localStoragePlugin]