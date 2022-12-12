import fs from 'fs';

export const isFullExists = (name: string): boolean => {
  try {
    const res: boolean = fs.existsSync(`assets/full/${name}.jpg`);
    return res;
  } catch (err) {
    throw new Error(err as unknown as string);
  }
};

export const isThumbExists = (
  name: string,
  height: number,
  width: number
): boolean => {
  return fs.existsSync(`assets/thumb/${name}_${height}_${width}.jpg`);
};
