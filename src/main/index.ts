import express from 'express';
import validator from './utilities/validator';
import { format } from './utilities/formatUtils';
import { isThumbExists } from './utilities/pathUtils';

const app = express();
const port = 3000;
app.get(
  '/api/images/:name',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const temp = validator(req, res);
      if (temp.error) {
        res.status(400).send(temp.result);
        throw new Error(temp.result);
      }
      const { name, height, width } = temp.obj!;

      // format only if the thumbnail with the following name_height_width does not exist
      // check if it exists or not
      if (!isThumbExists(name, height, width)) {
        await format(name, height, width);
      }

      //send response file if validator works && thumbnail exists.
      res.sendFile(
        `${name}_${height}_${width}.jpg`,
        { root: 'assets/thumb' },
        (err) => {
          if (err) {
            throw new Error(err.message);
          }
        }
      );
      return res;
    } catch (err: unknown) {}
  }
);

app.listen(port);
export default app;
