export const generateItems = (count, shift) => {
  return Array(count)
    .fill({})
    .map((item, index) => ({
      src: `https://picsum.photos/400/400/?image=${index + shift}`,
      title: `image-${index + shift}`,
    }));
};
