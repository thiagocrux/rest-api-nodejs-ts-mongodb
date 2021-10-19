import { Express, Request, Response } from 'express';

export default function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200); // If the response sends a status of 200 it means that the API is up and running
  });
}
