import  Router  from "express";

import helloController from "./controllers/helloController";
import userController from "./controllers/userController";
import messageController from"./controllers/messageController";


const api = () => {
    const routes = Router();
    routes.get('/', helloController.hello);
    routes.get('/templatedPage', helloController.templatedPage);

    routes.get('/users', userController.getUsers);
    routes.put('/user', userController.putUser);
    routes.get('/user/:userId', userController.getUser);

    // routes.get('/user/:userId/messages', messageController.getMessageUsers);
    routes.get('/user/:userId/message', messageController.getMessageUser);
    routes.put('/user/:userId/message', messageController.putMessageUser);
    routes.delete('/message/:userId', messageController.deleteMessageUser);
    routes.delete('/user/:userId', userController.deleteUser);
    
    // routes.post('/user/:userId', userController.postUser);        
    routes.get('/meteo/:city', helloController.getMeteo);
    
    return routes
};

export default api;