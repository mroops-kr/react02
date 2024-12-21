export const loadIcon = async (path: string): Promise<string> => {
  try {
    const image = await import(`~assets/icons/${path}`);
    return image.default;
  } catch (err) {
    console.error(`Error loading image: ${path}`, err);
    return "";
  }
};

export const loadImage = async (path: string): Promise<string> => {
  try {
    const image = await import(`~assets/icons/${path}`);
    return image.default;
  } catch (err) {
    console.error(`Error loading image: ${path}`, err);
    return "";
  }
};
