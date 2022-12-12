import express from 'express';
import { isFullExists } from './pathUtils';
type Thumb = {
    name: string,
    height: number,
    width: number
}

const validator = (req: express.Request, res: express.Response): Thumb => {
    const name: string = req.params.name;
    if (req.query.width == undefined) {
        res.status(400).send('Width missing');
    }
    if (req.query.height == undefined) {
        res.status(400).send('Height missing');
    }
    if (!containsOnlyNumbers((req.query.height as unknown) as string) || !containsOnlyNumbers((req.query.width as unknown) as string)) {
        res.status(400).send('Invalid format for height or width');
    }

    const height: number = Number.parseInt(
        req.query.height as unknown as string
    );
    const width: number = Number.parseInt(
        req.query.width as unknown as string
    );

    if (!isFullExists(name)) {
        res.status(400).send('file not found');
    }

    return { name, height, width };
}


const containsOnlyNumbers = (str: string) => {
    return /^[0-9]+$/.test(str);
}

export default validator