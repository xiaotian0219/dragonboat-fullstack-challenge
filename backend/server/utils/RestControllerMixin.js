import { Router } from "express";

export default (Controller) =>
  class extends Controller {
    constructor() {
      super();
      this.handleErrors = this._handleErrors;
    }

    _handleErrors = (err, req, res, next) => {
      const extendedErrorHandlersByType = {
        ObjectDoesNotExistError: (err, req, res) => res.status(404).send(),
        ...(this.errorHandlersByType || {}),
      };

      const handler = Object.entries(extendedErrorHandlersByType).reduce(
        (handler, [errorType, typeHandler]) => {
          if (err.constructor.name === errorType) return typeHandler;

          return handler;
        },
        null
      );

      return handler ? handler(err, req, res, next) : next(err);
    };

    getRoutes = () => {
      const router = new Router();

      router.use(this.router);

      router.use((err, req, res, next) => {
        return this._handleErrors(err, req, res, next);
      });

      return router;
    };
  };
