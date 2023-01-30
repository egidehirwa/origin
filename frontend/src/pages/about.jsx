import bgtree from "../assets/bgtree.png"
import branch from "../assets/branch.png"
import treeroots from "../assets/treeroots.png"
import sponsors from "../assets/sponsors.png"
import jerome from "../assets/jerome.png"


const AboutPage = ({ logedIn }) => {
  return (
    <div className="relative z-0">
        <img className="absolute rotate-[135deg] opacity-[.10] scale-[1.5] left-[-50px] top-[-100px]" src={bgtree} alt="" />
      <AboutUs />
      <OurMission />

        <img className="absolute hidden lg:flex rotate-[350deg] scale-[1] left-[-200px] top-[900px]" src={branch} alt="" />
        <img className="absolute hidden lg:flex scale-[0.8] rotate-[220deg] right-[-300px] top-[1550px]" src={branch} alt="" />
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
        hic consequuntur perferendis voluptates magnam error obcaecati quisquam
        minus?
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
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            similique vero, unde earum placeat ab animi quo aut. Libero, ullam est
            hic consequuntur perferendis voluptates magnam error obcaecati quisquam
            minus?</p>
        </div>
        <div className="flex lg:w-1/3 py-24 items-center">
            <img className="" src={treeroots} alt="" />
        </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
    <div className="bg-lightgreen flex flex-col text-center text-lightcream pt-14 pb-24">
      <div className="container mx-auto">
      <h2 className="pb-16 text-center p-2 drop-shadow-xl font-semibold text-[36px] ">Meet Our Team</h2>
      <div className="flex flex-row">
      <div className="">
        <div className="lg:my-16 md:my-12 flex flex-row ">
            <div className="lg:w-1/2 flex flex-col">
          <h3 className="text-[32px] font-semibold">Jerome</h3>
          <p>Front end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa
            nam praesentium alias sapiente quibusdam ad, architecto impedit ea
            possimus maiores aspernatur totam omnis explicabo nulla doloribus
            delectus dicta! Nemo.
          </p>
            </div>
            <div className="relative bottom-[60px] scale-[0.8] right-[80px]">
                <img src={jerome} alt="" />
            </div>
        </div>


        <div className="lg:w-1/2 lg:mt-72 md:my-12">
          <h3 className="text-[32px] font-semibold container mx-auto">Rose</h3>
          <p>Front end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            impedit doloribus modi? Eos rerum a mollitia eligendi voluptatem,
            doloremque dolore fugit autem eveniet suscipit, iste hic, nemo
            facere odio reprehenderit?
          </p>
          <img src="" alt="" />
        </div>
      </div>


      <div>
        <div className="lg:w-1/2 lg:my-16 md:my-12">
          <h3 className="text-[32px] font-semibold">Charlotte</h3>
          <p>Front end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            magnam accusantium quisquam, cum quia consequatur minima unde
            reiciendis quis dolorum sint rem aspernatur placeat voluptatibus
            numquam expedita, molestias animi eum?
          </p>
          <img src="" alt="" />
        </div>


        <div className="lg:w-1/2 lg:mt-16 lg:mb-48 md:my-12 flex flex-col justify-between-">
          <h3 className="text-[32px] font-semibold">Gaston</h3>
          <p>Back end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            deleniti et soluta minima aspernatur numquam reprehenderit labore
            magni commodi, ratione tempora omnis exercitationem dolorem?
            Obcaecati excepturi omnis sed aliquam illum?
          </p>
          <img src="" alt="" />
        </div>

        
        <div className="lg:w-1/2 lg:my-16">
          <h3 className="text-[32px] font-semibold">Romain</h3>
          <p>Back end developer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            sint voluptas labore eaque natus, porro accusantium autem veritatis
            saepe corporis error eius ipsa officia, beatae facilis neque magnam
            veniam velit.
          </p>
          <img src="" alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

const OurSponsors = () => {
  return (
    <div className="bg-greenish grid md:grid-cols-1 lg:grid-cols-2 pt-8 pb-12">
      <div className="container mx-auto">
        <img className="w-[400px] flex items-center" src={sponsors} alt="" />
        <img className="w-[350px] flex items-center" src={sponsors} alt="" />
        <img className="w-[250px] flex items-center" src={sponsors} alt="" />
        </div>
        <div className="flex flex-col text-center">
            <h3 className="pb-16 p-2 text-lightcream font-semibold text-[36px] drop-shadow-l">Our Sponsors</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis harum aliquam, officia a laudantium sequi provident ratione animi, error libero quo possimus voluptatem quasi iusto, quidem illum voluptatum aperiam?</p>
      </div>
    </div>
  );
};

export default AboutPage;
