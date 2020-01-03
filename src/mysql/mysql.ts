import mysql = require('mysql');



export default class Mysql {

    private static _instance: Mysql;

    cnn: mysql.Connection;
    conectado : boolean = false;

    constructor(){
        console.log('Clase iniciada');

        this.cnn = mysql.createConnection({
            host:'localhost',
            user:'node_user',
            password:'123456',
            database:'node_db'
        });

        this.conectarDB();
    }

    private conectarDB (){
        this.cnn.connect( (err: mysql.MysqlError) => { 
            
            if( err){
                console.log( err.message );
            }

            this.conectado = true;
            console.log('Base de datos online')
        } )
    }

}