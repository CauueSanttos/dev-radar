import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.devs();
    this.search();
  }

  devs() {
    this.routes.get('/devs', DevController.index);
    this.routes.post('/devs', DevController.store);
  }

  search() {
    this.routes.get('/search', SearchController.index);
  }
}

export default new Routes().routes;
