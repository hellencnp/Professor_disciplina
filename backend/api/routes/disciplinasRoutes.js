// const controller = require('../controllers/disciplinasControllers.js');

// server.get('/disciplinas', controller.disciplinasMenu)

// server.get('/disciplinas/listar', controller.disciplinasGetAll)

// server.get('/disciplinas/consultar/:codigo', controller.disciplinasGetById)

// server.get('/disciplinas/ativoInativo/:codigo', controller.disciplinasAtivoInativo)


const controller = require('../controllers/disciplinasControllers.js');



server.get('/disciplinas', controller.disciplinasGetAll)
server.get('/disciplinas/:codigo', controller.disciplinasGetById)

// server.put('/disciplinas/ativoInativo/:codigo', controller.disciplinasAtivoInativo)

server.put('/disciplinas/:codigo', controller.disciplinasEditar)
server.post('/disciplinas', controller.disciplinasNovo)

