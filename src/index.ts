import Server from './server/server';
import router from './routes/router';
import Mysql from './mysql/mysql';

const server = Server.init(3000);
    
server.app.use(router)

const mysql = new Mysql();


server.start( () => { 
    console.log('Sevidor corriendo en el puerto 3000')
})

// le añade fucniones a javascript