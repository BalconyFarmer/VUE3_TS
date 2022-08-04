import {defineStore} from 'pinia'

/**
 * 数据持久化
 * pinia-plugin-persist
 */
export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三'
        }
    },
    getters: {
        fullName: (state) => {
            return state.name
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        }
    }
})