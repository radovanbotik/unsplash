import React from "react";
import "./Photo.css";

export default function Photo(props) {
  console.log(props);
  const {
    likes,
    urls: { regular },
    user: { first_name },
    user: { last_name },
    user: {
      profile_image: { small },
    },
    user: {
      links: { html },
    },
  } = props;
  return (
    <article className="card">
      <img src={regular} alt="" className="card-image" />
      <div className="interactive">
        <img src={small} alt="thumbnail" className="userthumb" />
        <h4>
          Artist : {first_name} {last_name}
        </h4>
        <p>Likes💓:{likes}</p>
        <a href={html}>visit user</a>
      </div>
    </article>
  );
}
