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

      <div class="table">
        <div class="row">
          <div id="body" class="table-cell">
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
                . Here you will find an unordered list of the most reputable
                brands in the industry. These links will take you directly to
                the exact location on their website for motocross dirt bikes,
                saving you search time! Take a look at each website to find the
                best moto bike for you.
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
                Like riding trails near the{" "}
                <span class="power">power lines?</span> Here you will find an
                unordered list of the most reputable brands in the industry.
                These links will take you directly to the exact location on
                their website for trail bikes, saving you search time! Take a
                look at each website to find the best trail bike for you.
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
                Concerned about <span class="carbon">carbon footprint?</span>{" "}
                Lets dive into the eletric bikes of the moto world. Here you
                will find an unordered list of the most reputable brands in the
                industry. These links will take you directly to the exact
                location on their website for ebikes, saving you search time!
                Take a look at each website to find the best ebike for you.
              </p>
            </div>
          </div>
          <div id="sidebar" class="table-cell">
            <h3>Supercross Standings</h3>
            <p>
              View Current Monster Energy Supercross Statndings right{" "}
              <Link
                to={{
                  pathname:
                    "https://www.supercrosslive.com/championship-standings"
                }}
                target="same"
              >
                here.
              </Link>
            </p>
            <h3>History of Dirtbikes</h3>
            <p>
              Want to read more about the origins of these two-wheeled machines?
              Do so{" "}
              <Link
                to={{
                  pathname:
                    "https://www.dirtbikeplanet.com/who-invented-the-dirt-bike/"
                }}
                target="same"
              >
                here.
              </Link>
            </p>
            <h3> Broke something? </h3>
            <p>
              Looking for parts?{" "}
              <Link
                to={{
                  pathname: "https://www.rockymountainatvmc.com/parts/dirt-bike"
                }}
                target="same"
              >
                RockyMountainATV
              </Link>
              has a wide selection of parts for almost any bike you own!
            </p>
          </div>
        </div>
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
