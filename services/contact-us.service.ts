import { useAuthStore } from '~/store';
import { api_base_url } from '~/helpers/function';
import axios from 'axios';
import type { ContactUs } from '../models/contact-us.model';

export const create = async(data?: ContactUs)=>{
    try{
        const res = await axios.post<ContactUs>(api_base_url('api/requests'), data, {
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

export const getAll = async()=>{
    try{
        const res = await axios.get(api_base_url('api/admin/requests'), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                // "X-Requested-With": "XMLHttpRequest"
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}
export const getOne = async(id: number)=>{
    try{
        const res = await axios.get(api_base_url('api/admin/requests/'+id), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                // "X-Requested-With": "XMLHttpRequest"
                "Authorization": "Bearer "+ useAuthStore().token
                
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}
export const deleteOne = async(id: number)=>{
    try{

        const res = await axios.delete(api_base_url('api/admin/requests/'+id), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                // "X-Requested-With": "XMLHttpRequest"
                "Authorization": "Bearer "+ useAuthStore().token
                
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}