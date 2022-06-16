import axios from 'axios' // 引入axios
import { emitter } from '@/utils/bus.js'
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 99999
})
let acitveAxios = 0
let timer
const showLoading = () => {
    acitveAxios++
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        if (acitveAxios > 0) {
            emitter.emit('showLoading')
        }
    }, 400)
}

const closeLoading = () => {
    acitveAxios--
    if (acitveAxios <= 0) {
        clearTimeout(timer)
        emitter.emit('closeLoading')
    }
}
// http request 拦截器
service.interceptors.request.use(
    config => {
        if (!config.donNotShowLoading) {
            showLoading()
        }
        config.data = JSON.stringify(config.data)
        config.headers = {
            'Content-Type': 'application/json',
        }
        return config
    },
    error => {
        closeLoading()
        return error
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        closeLoading()
        if (response.headers['new-token']) {
            store.commit('user/setToken', response.headers['new-token'])
        }
        if (response.data.code === 0 || response.headers.success === 'true') {
            if (response.headers.msg) {
                response.data.msg = decodeURI(response.headers.msg)
            }
            return response.data
        } else {
            return response.data.msg ? response.data : response
        }
    },
    error => {
        closeLoading()
        switch (error.response.status) {
            case 500:
                break
            case 404:
                break
        }

        return error
    }
)

export default service
