import { api_base_url } from '~/helpers/function';
import axios from 'axios';

export const get_addresses = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/addresses'), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const getOne = async(id: number)=>{
    try{
        const res = await axios.get<any>(api_base_url('api/addresses/'+id), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const deleteOne = async(id: number)=>{
    try{
        const res = await axios.delete<any>(api_base_url('api/admin/addresses/'+id), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const edit = async(id:number, data?: any)=>{
    try{
        const res = await axios.put<any>(api_base_url('api/admin/addresses/'+id),data, {
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

export const create = async(data?: any)=>{
    try{
        const res = await axios.post<any>(api_base_url('api/admin/addresses'), data, {
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