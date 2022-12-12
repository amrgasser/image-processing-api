import express from 'express';
import validator from './utilities/validator';
import { format } from './utilities/formatUtils';
import { isThumbExists } from './utilities/pathUtils';

const app = express();
const port = 3000;



app.get('/hi', (req, res) => {
    res.send('hi');
});
app.get(
    '/api/images/:name',
    async (req: express.Request, res: express.Response) => {
        try {

            const { name, height, width } = validator(req, res);

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
