const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcado logico de tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer',{
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}