const controller = require('../controllers/professoresControllers.js');



server.get('/professores', controller.professoresGetAll)
server.get('/professores/:codigo', controller.professoresGetById)

// server.put('/professores/ativoInativo/:codigo', controller.professoresAtivoInativo)

server.put('/professores/:codigo', controller.professoresEditar)
server.post('/professores', controller.professoresNovo)

