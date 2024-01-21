import { ToastMessage } from './enum';
import Swal from "sweetalert2";

export function base_url(path?:string):string{
    return "https://mahyapardaz.com/" + path
}

export function api_base_url(path:string = ""):string{
    return "https://back.mahyapardaz.com/" + path
    // return "http://127.0.0.1:8000/" + path
}

export function get_clinet_url(path: string = ''){
    return 'https://mahyapardaz.com/'+ path
}

export function Toast(){
    return Swal.mixin({
        toast: true,
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 8000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })
}

export function messages(ToastMessageType: ToastMessage){
    switch(ToastMessageType){   
        case ToastMessage.ServerError:  
            Toast().fire({title: 'خطا در برقراری ارتباط با سرور', icon: 'error'})
            return;
        case ToastMessage.Success:  
            Toast().fire({title: 'عملیات با موفقیت انجام شد', icon: 'success'})
            return;
    }
}

export function breadcrumb(item: string){
    switch(item){
        case "project":
            return "پروژه های ما"
        case "about-us":
            return "درباره ما"
        case "service":
            return "خدمات"
        case "blog":
            return "بلاگ"
        case "contact-us":
            return "ارتباط با ما"
        default:
            return item.replaceAll('-',' ')
    }
}

export function getBaseInfo(){
    return JSON.parse(
        localStorage.getItem('BASEINFO') || '{}'
    )
        
}
