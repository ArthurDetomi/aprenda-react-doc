import { getImageUrl } from "./utils.js";

export function Profile(props) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(props.url)}
        alt={props.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.profession}
        </li>
        <li>
          <b>Awards: {props.awardsCount} </b>
          {props.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        url="szV5sdG"
        profession="physicist and chemist"
        awardsCount="4"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
        Matteucci Medal)"
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        url="YfeOqp2"
        profession="geochemist"
        awardsCount="2"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
