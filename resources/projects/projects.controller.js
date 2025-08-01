const HttpCodes = require("../../const/HttpCodes");

const GetProjects = (req, res) => {

  // Aquí podrías agregar la lógica para obtener los proyectos
  // Por ahora, vamos a simular una respuesta con algunos proyectos de ejemplo
  res.status(HttpCodes.OK).json({
    data: [
        { id: 1, name: "Proyecto Casma", description: "Descripción del Proyecto Casma", author: "Autor 1" },
        { id: 2, name: "Proyecto Viru", description: "Descripción del Proyecto Viru", author: "Autor 2" }
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

const GetProject = (req, res) => {
  const { projectId } = req.params;

  if (!projectId) {
    return res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      error: true,
      message: "El id del proyecto es obligatorio"
    });
  }

  return res.status(HttpCodes.OK).json({
    data: { id: projectId, name: `Proyecto ${projectId}`, description: "Proyecto con el id " + projectId, urn: "urn:project:" + projectId},
    error: false,
    message: "Proyecto encontrado"
  })
};

module.exports = {
  GetProjects,
  GetProject,
  CreateProject,
  DeleteProject,
};
