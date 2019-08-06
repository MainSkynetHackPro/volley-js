const createCanvas = (container) => {
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);

  return canvas
}

export {
  createCanvas
};