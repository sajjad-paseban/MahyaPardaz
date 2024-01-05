import { api_base_url } from '~/helpers/function';
import axios from 'axios';
import type { ContactUs } from '../models/contact-us.model';
const base_info = async()=>{
    try{
        const res = await axios.get<any>(api_base_url('api/requests'), {
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
    base_info,
}