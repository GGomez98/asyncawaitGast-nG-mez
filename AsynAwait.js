const amasarMasa = async (minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('Amasando la masa...')
    }, minutos*1000));
}

const agregarSalsa = async (minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('Agregando salsa...')
    }, minutos*1000));
}

const agregarQueso = async (minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('Agregando queso...')
    }, minutos*1000))
}

const ponerPizzaAHornear = async (minutos) =>{
    return new Promise(resolve => setTimeout(()=>{
        resolve('Poneindo pizza en el horno...')
    }, minutos*1000))
}

const sacarPizzaDelHorno = async (minutos) =>{
    return new Promise(resolve=> setTimeout(()=>{
        resolve('Pizza lista! Sacando pizza del horno...')
    }, minutos*1000))
}

const comerPizza = async () =>{
    console.log("Preparando la masa...");
    console.log(await amasarMasa(3));
    console.log(await agregarSalsa(2));
    console.log(await agregarQueso(2));
    console.log(await ponerPizzaAHornear(2));
    console.log(await sacarPizzaDelHorno(5));
    console.log('Su pizza esta lista, que la disfrute!')
}

comerPizza();