export const wait = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));
export const nextTick = () =>
  new Promise<void>((resolve) => process.nextTick(() => resolve()));
