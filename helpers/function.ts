export function base_url(path?:string):string{
    return "" + path
}
export function api_base_url(path?:string):string{
    return "http://192.168.1.140/mahya-pardaz/public/" + path
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
            return item
    }
}