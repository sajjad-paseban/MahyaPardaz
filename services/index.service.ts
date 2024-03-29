import { api_base_url } from '~/helpers/function';
import axios from 'axios';
import { useAuthStore } from '~/store';

export const index_data = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api'), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',

            },
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const base_info = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/base-info'), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const edit_base_info = async(form?:any)=>{
    try{
        const res = await axios.put<any>(api_base_url('api/admin/base-infos/1'), form, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const get_statistics = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/admin/statistics'), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const login = async(form?:any)=>{
    try{

        const res = await axios.post<any>(api_base_url('api/login'), form, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest"
            }
        })
            
        return res
    }catch(res: any){
        return res.response
    }
}

export const logout = async()=>{
    try{
        const res = await axios.post<any>(api_base_url('api/logout'), [], {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}