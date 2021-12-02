import { Link } from "react-router-dom";
import ebike from "../images/EBIKE.jpg";
import ebikeT from "../thumbnails/EBIKEcopy.jpg";
import ThumbnailLink from "../ThumbnailLink.js";

function Ebike() {
  return (
    <section id="landing">
      <h1>MotoMania - E-Bike </h1>
      <ThumbnailLink
        lowResThumb={ebikeT}
        highResThumb={ebike}
        width={600}
        height={338}
        alt="alta ebike"
        pageName="ebike"
      />

      <br />

      <ul>
        <li>
          <Link
            to={{ pathname: "https://www.ktm.com/en-us/models/e-ride.html" }}
            target="same"
          >
            KTM
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "https://sur-ronusa.com" }} target="same">
            SURRON
          </Link>
        </li>
      </ul>

      <br />
      <br />

      <Link to="../home.html">Back to home page</Link>
    </section>
  );
}
export default Ebike;
