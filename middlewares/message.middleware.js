const messageMiddleware = (req, res, next) => {
    console.log('## SOY UN MIDDLEWARE ##');
    next();
}

    // if (false) { // Aquí puedes agregar tu lógica de autenticación
    //     // Si el usuario está autenticado
    //     console.log('## Usuario identificado ##');
    //     next();
    // } else {
    //     console.log('## Usuario no identificado ##');
    //     res.status(401).send('No autorizado');
    // }
    
module.exports = messageMiddleware;
