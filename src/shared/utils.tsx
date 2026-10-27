import { Link, type LinkProps } from "react-router";

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

// Lets flowbite components (which expect href) render a react-router Link (which expects to)
export function RouterLink({ href, ...props }: Omit<LinkProps, "to"> & { href: string }) {
  return <Link to={href} {...props} />;
}