import { Link } from "react-router-dom";
import moto from "./images/MOTO.jpg";
import trail from "./images/TRAIL.jpg";
import ebike from "./images/EBIKE.jpg";
import motoT from "./thumbnails/MOTOcopy.jpg";
import trailT from "./thumbnails/TRAILcopy.jpg";
import ebikeT from "./thumbnails/EBIKEcopy.jpg";
import ThumbnailLink from "./ThumbnailLink.js";

function Home() {
  return (
    <div>
      <div id="header">
        <h1 id="top">
          MotoMania <br /> <q>Find the bike for you</q>
        </h1>
      </div>

      <br />

      <div id="moto">
        <Link to="moto/moto.html" title="Motocross Dirt Bikes">
          <h2>Motocross</h2>
        </Link>
        <ThumbnailLink
          lowResThumb={motoT}
          highResThumb={moto}
          width={600}
          height={338}
          alt="moto race"
          pageName="moto"
        />
        <p>
          Enter the world of{" "}
          <span class="racing">
            <em>competitive</em> racing
          </span>
          . Here is a complete listing of all morocross dirt bikes, filtered
          down by brand, engine type, and price. Included under the factory
          description of each motorcycle are video reviews conducted by top
          riders in the industry. Also inked below are the websites of the most
          pupular brands in the industry. These links will take you directly to
          the most current production of motorcycles.
        </p>
      </div>

      <br />

      <div id="trails">
        <Link to="trail/trail.html" title="Trail Dirt Bikes">
          <h2>Trail/Off-road</h2>
        </Link>
        <ThumbnailLink
          lowResThumb={trailT}
          highResThumb={trail}
          width={600}
          height={450}
          alt="woods riding"
          pageName="trail"
        />
        <p>
          Like riding trails near the <span class="power">power lines?</span>{" "}
          Here is a complete listing of all Trail/Off-road orriented dirt bikes,
          filtered down by brand, engine type, and price. Included under the
          factory description of each motorcycle are video reviews conducted by
          knowlegable trail riders in the industry.Also inked below are the
          websites of the most pupular brands in the industry. These links will
          take you directly to the most current production of motorcycles.
        </p>
      </div>

      <br />

      <div id="ebike">
        <Link to="ebike/ebike.html" title="Eletric Dirt Bikes">
          <h2>E-Bikes</h2>
        </Link>
        <ThumbnailLink
          lowResThumb={ebikeT}
          highResThumb={ebike}
          width={600}
          height={338}
          alt="alta ebike"
          pageName="ebike"
        />
        <p>
          Concerned about <span class="carbon">carbon footprint?</span> Lets
          dive into the eletric bikes of the moto world. Here is a complete
          listing of all e-bikes, filtered down by brand and price. Included
          under the factory description of each e-bike are video reviews
          conducted by knowlegable riders in the industry.Also inked below are
          the websites of the most pupular brands in the industry. These links
          will take you directly to the most current production of motorcycles.
        </p>
      </div>

      <br />
      <br />
      <br />

      <p>
        <a href="#top">Back to top!</a>
      </p>

      <p id="copyright">&copy; MotoMania 2021</p>
    </div>
  );
}
export default Home;
