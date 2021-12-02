import { Link } from "react-router-dom";
import moto from "../images/MOTO.jpg";
import motoT from "../thumbnails/MOTOcopy.jpg";
import ThumbnailLink from "../ThumbnailLink.js";

function Moto() {
  return (
    <section id="landing">
      <h1>MotoMania - Motocross </h1>
      <ThumbnailLink
        lowResThumb={motoT}
        highResThumb={moto}
        width={600}
        height={338}
        alt="moto race"
        pageName="moto"
      />
      <br />
      <ul>
        <li>
          <Link
            to={{
              pathname: "https://powersports.honda.com/off-road/competition"
            }}
            target="same"
          >
            Honda
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://www.yamahamotorsports.com/motocross" }}
            target="same"
          >
            Yamaha
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                "https://www.kawasaki.com/en-us/motorcycle/kx?cm_re=GLOBALNAV-_-SUBBRAND-_-EXPLOREFAMILY"
            }}
            target="same"
          >
            Kawasaki
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://www.ktm.com/en-us/models/mx.html" }}
            target="same"
          >
            KTM
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://suzukicycles.com/motocross" }}
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
export default Moto;
