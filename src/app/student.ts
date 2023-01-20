export class Student{
    id: string
    name: string
    rollnumber: string
    email: string
}
export class User{
    user:string
    password:string
}
export class Profile{
    user:string
    password:string
    info:{
        name:string
        rollnumber:string
        email:string
        id:string
    }
}