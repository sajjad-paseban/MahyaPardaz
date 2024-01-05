import { api_base_url } from '~/helpers/function';
import axios from 'axios';
import type { ContactUs } from '../models/contact-us.model';

const create = async(data?: ContactUs)=>{
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



export {
    create,
}