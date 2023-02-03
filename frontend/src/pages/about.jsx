import treeBG from "../assets/background/treeBG.png";
import branch from "../assets/branch.png";
import treeroots from "../assets/treeroots.png";
import sponsors from "../assets/sponsors.png";
import rose from "../assets/rose.png";
import gaston from "../assets/gaston.png";
import romain from "../assets/romain.png";
import charlotte from "../assets/charlotte.png";

const AboutPage = ({ logedIn }) => {
  return (
    <div className="">
      <img className="absolute rotate-[135deg] left-[-350px] top-[-500px]" 
        src={treeBG} alt="" />
      <AboutUs />
      <OurMission />
      <MeetOurTeam />
      <OurSponsors />
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="bg-lightgreen flex flex-col items-center text-center text-lightcream">
      <div className="lg:w-1/2 py-12 container mx-auto">
        <h2 className="text-center drop-shadow-xl font-semibold text-[50px]">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          similique vero, unde earum placeat ab animi quo aut. Libero, ullam est
          hic consequuntur perferendis voluptates magnam error obcaecati
          quisquam minus?
        </p>
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="flex justify-center flex-wrap container mx-auto">
      <div className="flex flex-col lg:w-2/3 items-center lg:px-24 lg:py-48 text-center ">
        <h2 className="text-lightcream p-2 font-semibold text-[36px]">Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          similique vero, unde earum placeat ab animi quo aut. Libero, ullam est
          hic consequuntur perferendis voluptates magnam error obcaecati
          quisquam minus?
        </p>
      </div>
      <div className="flex lg:w-1/3 py-24 items-center">
        <img className="" src={treeroots} alt="" />
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
    <div className="bg-lightgreen text-center text-lightcream">
      <div className="">
        <h2 className="py-12 text-center p-2 drop-shadow-xl font-semibold text-[36px]">Meet Our Team</h2>


        <img className="absolute hidden lg:flex opacity-[.70] rotate-[360deg] scale-[0.8] left-[-300px] top-[1000px]"
          src={branch} alt="" />
        <img className="absolute hidden lg:flex opacity-[.70] scale-[0.8] rotate-[220deg] right-[-300px] top-[1800px]"
          src={branch} alt="" />

        <div className="container mx-auto">


          <div className="lg:mt-[50px] flex flex-wrap justify-center">
            <div className="scale-[0.8] items-center">
              <img src={rose} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/2 z-0 order-1">
              <h3 className="text-[32px] font-semibold pb-6">Rose</h3>
              <p className="">Front end developer</p>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                impedit doloribus modi? Eos rerum a mollitia eligendi
                voluptatem, doloremque dolore fugit autem eveniet suscipit, iste
                hic, nemo facere odio reprehenderit?</p>
            </div>
          </div>


          <div className="flex sm:flex-col-reverse lg:flex-row flex-wrap justify-center sm:align-center">
            <div className="flex flex-col lg:w-1/2 z-0">
              <h3 className="text-[32px] font-semibold pb-6">Charlotte</h3>
              <p className="pb-2">Front end developer</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                magnam accusantium quisquam, cum quia consequatur minima unde
                reiciendis quis dolorum sint rem aspernatur placeat voluptatibus
                numquam expedita, molestias animi eum?</p>
            </div>
            <div className="scale-[0.8] items-center">
              <img className="" src={charlotte} alt="" />
            </div>
          </div>


          <div className="flex flex-row flex-wrap justify-center">
            <div className="scale-[0.8] items-center">
              <img src={gaston} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/2 z-0">
              <h3 className="text-[32px] font-semibold pb-6">Gaston</h3>
              <p className="pb-2">Back end developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                deleniti et soluta minima aspernatur numquam reprehenderit
                labore magni commodi, ratione tempora omnis exercitationem
                dolorem? Obcaecati excepturi omnis sed aliquam illum?</p>
            </div>
          </div>


          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col lg:w-1/2 z-0">
              <h3 className="text-[32px] font-semibold pb-6">Romain</h3>
              <p className="pb-2">Back end developer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae sint voluptas labore eaque natus, porro accusantium
                autem veritatis saepe corporis error eius ipsa officia, beatae
                facilis neque magnam veniam velit.</p>
            </div>
            <div className="scale-[0.8] items-center">
              <img className="md:justify-center" src={romain} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const OurSponsors = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col items-center lg:w-1/3 py-24">
          <img className="w-[300px]" src={sponsors} alt="" />
          <img className="w-[250px]" src={sponsors} alt="" />
          <img className="w-[200px]" src={sponsors} alt="" />
        </div>
        <div className="flex flex-col lg:w-2/3 items-center lg:px-24 lg:py-36 text-center ">
          <h3 className="pb-16 p-2 text-lightcream font-semibold text-[36px] drop-shadow-l">Our Sponsors</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            veritatis harum aliquam, officia a laudantium sequi provident ratione
            animi, error libero quo possimus voluptatem quasi iusto, quidem illum
            voluptatum aperiam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
