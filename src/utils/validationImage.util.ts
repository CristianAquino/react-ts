const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

const validationImage = (img: File) => {
  return fileTypes.includes(img.type);
};

export { validationImage, fileTypes };
