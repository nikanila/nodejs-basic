import express from 'express';
import homeController from '../controller/homeController';
import aboutController from '../controller/aboutController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage)
    
    router.get('/about', aboutController.getAboutPage);

    return app.use('/', router);
}

export default initWebRoute;