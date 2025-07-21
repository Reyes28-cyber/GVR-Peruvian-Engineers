const GetUsers = (req, res) => {
    res.send('Informacion de usuarios');
}

const GetUserById = (req, res) => {
    res.send(`Informacion de usuario ${req.params.id}`);
}

module.exports = {
    GetUsers,
    GetUserById
}
