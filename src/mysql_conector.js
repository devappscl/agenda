//importar mysql
import mysql from 'mysql'
let todos
//crear la conexion
const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'seres159',
        database: 'agenda'
    }
)

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO usuarios (id_contacto, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = ()=> {
    const sql = 'SELECT * FROM usuarios'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto = id => {
    const sql = `DELETE FROM usuarios where id_contacto=${id}`
    conector.query(sql)
}







export {agregarContacto, obtenerContactos, borrarContacto}