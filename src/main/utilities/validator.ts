import express from 'express';
import { isFullExists } from './pathUtils';
type Result = {
  result?: string;
  error: boolean;
  obj?: Thumb;
};

type Thumb = {
  name: string;
  width: number;
  height: number;
};

const validator = (req: express.Request, res: express.Response): Result => {
  const name = req.params.name as string;

  if (!isFullExists(req.params.name)) {
    return { result: 'file not found', error: true };
  } else if (req.query.width == undefined) {
    return { result: 'Width missing', error: true };
  } else if (req.query.height == undefined) {
    return { result: 'Height missing', error: true };
  } else if (
    !containsOnlyNumbers(req.query.height as unknown as string) ||
    !containsOnlyNumbers(req.query.width as unknown as string)
  ) {
    return { result: 'Invalid format for height or width', error: true };
  }

  const height: number = Number.parseInt(req.query.height as unknown as string);
  const width: number = Number.parseInt(req.query.width as unknown as string);
  const obj: Thumb = { name, height, width };
  return { error: false, obj };
};

const containsOnlyNumbers = (str: string) => {
  return /^[0-9]+$/.test(str);
};

export default validator;
