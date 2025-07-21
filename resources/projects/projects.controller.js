const GetProjects = (req, res) => {
    res.send('Informacion de proyectos');
}

const GetProjectById = (req, res) => {
    res.send(`Informacion de proyecto ${req.params.id}`);
}

module.exports = {
    GetProjects,
    GetProjectById
}
