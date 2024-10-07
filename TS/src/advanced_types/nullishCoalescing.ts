let speed: number | null = null;

let ride = {
  // Falsy (undefined, null, '', false, 0)
  // but if 0 is ok
  //speed: speed || 30
  speed: speed ?? 30,
};
