"use client";
import { FullNavBar } from "../../shared/ui_elements";
import { getImageUrl } from '../../shared/utils';
import '../../styles/App.css'


type person = {
    imageId: string;
    name: string;
};

type props = {
  person: person;
  size: number;

}

export default function App(){
    return(
        <div>
            <FullNavBar/>
            <Gallery/>

        </div>

    );
}


function Gallery() {
  return (
    <section>
      <h2>Amazing scientists</h2>
        <Profile />
        <Profile />
        <Profile />
    </section>
  );
}

function Avatar(props:props) {
  const person = props.person;
  const size = props.size;
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile() {
  return (
    <Avatar 
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
        size={100}
    />
  );
}
