import sharp from 'sharp';

export const format = async (
  name: string,
  height: number,
  width: number
): Promise<void> => {
  console.log(width);

  await sharp(`assets/full/${name}.jpg`)
    .resize(height, width)
    .toFile(`assets/thumb/${name}_${height}_${width}.jpg`);
};
