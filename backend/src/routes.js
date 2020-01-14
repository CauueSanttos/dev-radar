import { Router } from 'express';

class Routes {
  constructor() {
    this.routes = new Router();
  }
}

export default new Routes().routes;
