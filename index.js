import fs from 'fs';

const path = 'resultado/corrida.txt';
const amigos = [
    {
        id: 1,
        nombre: 'Lau',
        mail: 'laura.aguilar90@gmail.com',
        excep: 3,
        amigue: 0
    },
    {
        id: 2,
        nombre: 'Flor',
        mail: 'flor.piache@gmail.com',
        excep: 5,
        amigue: 0   
    },
    {
        id: 3,
        nombre: 'Gabi',
        mail: 'gabice88@gmail.com',
        excep: 1,
        amigue: 0
    },
    {
        id: 4,
        nombre: 'Ana',
        mail: 'anafloradelasramas@gmail.com',
        excep: 0,
        amigue: 0
    },
    {
        id: 5,
        nombre: 'Percha',
        mail: 'fernandomarturet@gmail.com',
        excep: 2,
        amigue: 0   
    },
    {
        id: 6,
        nombre: 'Javi',
        mail: 'musich.js@gmail.com',
        excep: 0,
        amigue: 0
    },
    {
        id: 7,
        nombre: 'Agus',
        mail: 'agustinalemos013@gmail.com',
        excep: 8,
        amigue: 0
    },
    {
        id: 8,
        nombre: 'Fabu',
        mail: 'facundofedericomartin@gmail.com',
        excep: 7,
        amigue: 0   
    },
    {
        id: 9,
        nombre: 'Warter',
        mail: 'frutavisual@gmail.com',
        excep: 0,
        amigue: 0
    },
    {
        id: 10,
        nombre: 'Kolke',
        mail: 'jorge.manu87@gmail.com',
        excep: 0,
        amigue: 0
    },
    {
        id: 11,
        nombre: 'Dami',
        mail: 'damiancalderon@gmail.com',
        excep: 0, 
        amigue: 0   
    }
]

const amigoAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const controlarAmigue = (num) => {
    for (const ami of amigos) {
        if (num === ami.amigue) {
            return false;
        } 
    } 
    return true;
}

for (let amigo of amigos) {
    let conseguirAmigo = false;
    do {
        let amigoInvisible = amigoAleatorio(1, amigos.length+1);
        const amigoExiste = controlarAmigue(amigoInvisible);
        if (amigoExiste && (amigoInvisible != amigo.id) && (amigoInvisible != amigo.excep)) {
            amigo.amigue = amigoInvisible;
            console.log(`-------------------------------------------------------------------`);
            console.log(`Mail para: ${amigo.mail}`);
            console.log(`Nombre: ${amigo.nombre}`);
            console.log(`Amigue: ${amigos[amigoInvisible-1].nombre}`);
            conseguirAmigo = true;
        }
    } while (!conseguirAmigo);
}


const guardar = async (path, texto) => {
    const data = JSON.stringify(texto, null,'\t');
    try {
        await fs.promises.appendFile(path, data);
    }
    catch (error) {
        console.log(error);
    }
}

guardar(path, amigos);