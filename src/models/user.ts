export interface User{
    id:number;
    name:string;
    email:string;
    username:string;
}


export interface Posts{
    userId:number;
    id:number;
    title:string;
    body:string;
}


export interface Albums{
    userId:number;
    id:number;
    title:string;
}
