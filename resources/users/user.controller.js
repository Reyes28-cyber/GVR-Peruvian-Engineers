const GetUsers = (req, res) => {
    console.log('Obteniendo información de usuarios');
    res.send('Informacion de usuarios');
}

const GetUserById = (req, res) => {
    const { id } = req.params;
    console.log(`Obteniendo información del usuario con ID: ${id}`);
    res.status(200).json({
        data: { id: req.params.id, name: `Usuario ${req.params.id}`, email: `usuario${req.params.id}@ejemplo.com` },
        error: null,
        message: "Información de usuario obtenida exitosamente"
    });
}

module.exports = {
    GetUsers,
    GetUserById
}
