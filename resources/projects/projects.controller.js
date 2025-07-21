const HttpCodes = require("../../const/HttpCodes");

const GetProjects = (req, res) => {
  res.status(HttpCodes.OK).json({
    data: [
        { id: 1, name: "Proyecto 1", description: "Descripción del Proyecto 1", author: "Autor 1" },
        { id: 2, name: "Proyecto 2", description: "Descripción del Proyecto 2", author: "Autor 2" },
        { id: 3, name: "Proyecto 3", description: "Descripción del Proyecto 3", author: "Autor 3" }
    ],
    error: null,
    message: "Lista de proyectos obtenida exitosamente"
  });
};

const CreateProject = (req, res) => {
  const { name, description, author } = req.body;
  // Aquí podrías agregar la lógica para crear un proyecto

  // Aquí podrías agregar la lógica para crear un proyecto

    if (!name || !description || !author) {
      return res
        .status(HttpCodes.BAD_REQUEST)
        .json({
          data: null,
          error: true,
          message: "Faltan datos para crear el proyecto",
        });
    }

  res
    .status(HttpCodes.CREATED)
    .json({
      data: { name, description, author },
      error: null,
      message: "Proyecto creado exitosamente",
    });
};

const DeleteProject = (req, res) => {
  res.send(`Eliminando proyectos`);
};

const GetProjectById = (req, res) => {
  res.send(`Informacion de proyecto ${req.params.id}`);
};

module.exports = {
  GetProjects,
  GetProjectById,
  CreateProject,
  DeleteProject,
};
