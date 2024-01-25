import { useAuthStore } from '~/store';
import { api_base_url } from '~/helpers/function';
import axios from 'axios';

export const get_clients = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/clients'), {
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
        const res = await axios.get<any>(api_base_url('api/clients/'+id), {
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
        const res = await axios.delete<any>(api_base_url('api/admin/clients/'+id), {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        return res
    }catch(res: any){
        return res.response
    }
}

export const edit = async(id: number, form?: any)=>{
    try{
        const formData = new FormData()

        formData.append('title', form.title)
        formData.append('_method', 'put')
        formData.append("selected", form.selected ? "1" : "0")
        for(const i in form.product_ids){
            formData.append("product_ids[]", form.product_ids[i])
        }
        if(form.image){
            formData.append('image',form.image)
        }

        const res = await axios.post<any>(api_base_url('api/admin/clients/'+id), formData, {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'multipart/form-data',
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        
        return res
    }catch(res: any){
        return res.response
    }
}

export const create = async(form?: any)=>{
    try{
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("image", form.image)
        formData.append("selected", form.selected ? "1" : "0")
        for(const i in form.product_ids){
            formData.append("product_ids[]", form.product_ids[i])
        }

        const res = await axios.post<any>(api_base_url('api/admin/clients'), formData, {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'multipart/form-data',
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ useAuthStore().token
            }
        })
        
        return res
    }catch(res: any){
        return res.response
    }
}