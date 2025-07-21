const authMiddleware = (req, res, next) => {
    console.log('## SOY UN MIDDLEWARE DE AUTENTICACIÓN ##');
        if (req.headers['x-custom'] === 'admin') {
        console.log('## Usuario con permisos ##');
        next();
    } else {
        res.status(403).json({
            error: true,
            message: "No tienes permisos para acceder a este recurso"
        });
    }
}
module.exports = authMiddleware;
