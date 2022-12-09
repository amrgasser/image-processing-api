import fs from 'fs';

export const isFullExists = (name: string): boolean => {
  return fs.existsSync(`assets/full/${name}.jpg`);
};

export const isThumbExists = (
  name: string,
  height: number,
  width: number
): boolean => {
  return fs.existsSync(`assets/thumb/${name}_${height}_${width}.jpg`);
};
