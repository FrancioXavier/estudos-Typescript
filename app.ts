const num: number = 15

if(num >=10){
    console.log(`${num} maior que 10`);
}else if (num === 15){
    console.log(`${num} é igual a 15`)
}else {
    console.log(`${num} menor que 10`);
}


const typeUser = {
    admin: "Seja bem-vindo admin!",
    user: "Seja bem vindo usuário!",
    viewer: "Por favor se registre!"
}

function validateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const user = 'admin'

validateUser(user);