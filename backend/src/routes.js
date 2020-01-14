import { Router } from 'express';

import DevController from './app/controllers/DevController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.devs();
  }

  devs() {
    this.routes.post('/devs', DevController.store);
  }
}

export default new Routes().routes;
