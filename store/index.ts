import { defineStore } from "pinia"

export const useAuthStore = defineStore('authstore',() => {
    const isAuthenticated = ref(false)
    const token = ref('')

    function setIsAuthenticated(status: boolean){
        isAuthenticated.value = status
    }

    function setToken(hash: string){
        token.value = hash
    }

    return {
        isAuthenticated,
        token,
        setIsAuthenticated,
        setToken
    }

}, {
    persist: {
        storage: persistedState.cookies
    }
})

export const useBaseStore = defineStore('basestore', () => {

    const baseInfo = ref(null)

    function setBaseInfo(data: any){
        baseInfo.value = data
    }

    return {
        baseInfo,
        setBaseInfo
    }

},{
    persist: {
        storage: persistedState.localStorage
    }
}
)