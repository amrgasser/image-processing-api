import express from 'express';

import { format } from './utilities/formatUtils';
import { isFullExists, isThumbExists } from './utilities/pathUtils';

const app = express();
const port = 3000;

app.get('/hi', (req, res) => {
  res.send('hi');
});
app.get(
  '/api/images/:name',
  async (req: express.Request, res: express.Response) => {
    try {
      const name: string = req.params.name;

      const height: number = Number.parseInt(
        req.query.height as unknown as string
      );
      const width: number = Number.parseInt(
        req.query.width as unknown as string
      );
      if (!isFullExists(name)) {
        return res.status(400).send('file not found');
      }
      if (!isThumbExists(name, height, width)) {
        await format(name, height, width);
      }
      res.sendFile(
        `${name}_${height}_${width}.jpg`,
        { root: 'assets/thumb' },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );

      return res;
    } catch (e: unknown) {
      throw new Error(e as string);
    }
  }
);

app.listen(port);
export default app;
