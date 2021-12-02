import { Link } from "react-router-dom";
import trail from "../images/TRAIL.jpg";
import trailT from "../thumbnails/TRAILcopy.jpg";
import ThumbnailLink from "../ThumbnailLink.js";

function Trails() {
  return (
    <section id="landing">
      <h1>MotoMania - Trail </h1>
      <ThumbnailLink
        lowResThumb={trailT}
        highResThumb={trail}
        width={600}
        height={450}
        alt="woods riding"
        pageName="trail"
      />
      <br />
      <ul>
        <li>
          <Link
            to={{ pathname: "https://powersports.honda.com/off-road/trail" }}
            target="same"
          >
            Honda
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "https://www.yamahamotorsports.com/trail-motorcycle"
            }}
            target="same"
          >
            Yamaha
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                "https://www.kawasaki.com/en-us/motorcycle/klx?cm_re=GLOBALNAV-_-SUBBRAND-_-EXPLOREFAMILY"
            }}
            target="same"
          >
            Kawasaki
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://www.ktm.com/en-us/models/enduro.html" }}
            target="same"
          >
            KTM
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://suzukicycles.com/off-road" }}
            target="same"
          >
            Suzuki
          </Link>
        </li>
      </ul>

      <br />
      <br />

      <Link to="../home.html">Back to home page</Link>
    </section>
  );
}
export default Trails;
