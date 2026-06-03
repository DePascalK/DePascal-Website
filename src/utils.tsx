type person = {
    imageId: string;
    name: string;
};

export function getImageUrl(person: person, size: string = 's') {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    size +
    '.jpg'
  );
}
