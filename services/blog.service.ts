import { useAuthStore } from '~/store';
import { api_base_url } from '~/helpers/function';
import axios from 'axios';

export const get_blogs = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/posts'), {
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

export const get_blog = async(slug: string)=>{
    try{
        const res = await axios.get<any>(api_base_url('api/posts/'+slug), {
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
        const res = await axios.delete<any>(api_base_url('api/admin/posts/'+id), {
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

export const create = async(form?: any)=>{
    try{
        
        const data = new FormData()

        for(const item in form){
            if(item == "keywords"){
                form[item].split(',').map((value: any, index: any) =>{
                    data.append(item+'['+index+']', value)
                })
                
                continue;
            }
            data.append(item,form[item])
        }

        const res = await axios.post<any>(api_base_url('api/admin/posts'), data, {
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

export const edit = async(form?: any)=>{
    try{
        const data = new FormData()
        data.append('_method','put')
        for(const item in form){
            
            if(item == "keywords"){
                form[item].split(',').map((value: any, index: any) =>{
                    data.append(item+'['+index+']', value)
                })
                
                continue;
            }

            if(item == "image" && form[item] == null){                
                continue;
            }

            data.append(item,form[item])
        }

        const res = await axios.post<any>(api_base_url('api/admin/posts/'+form.id), data, {
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
export const create_media = async(form?: any)=>{
    try{
        
        const data = new FormData()

        for(const item in form){
            data.append(item,form[item])
        }

        const res = await axios.post<any>(api_base_url('api/admin/post-media'), data, {
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
export const get_medias = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/admin/post-media'), {
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

export const delete_media = async(id: number)=>{
    try{
        const res = await axios.delete<any>(api_base_url('api/admin/post-media/'+id), {
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
