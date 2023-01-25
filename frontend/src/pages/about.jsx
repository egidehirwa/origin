import bgtree from "../assets/bgtree.png"
import branch from "../assets/branch.png"

const AboutPage = ({ logedIn }) => {
  return (
    <div className="">
        <img className="absolute rotate-[135deg] opacity-[.10] scale-[1.5] left-[-50px] top-[-100px]" src={bgtree} alt="" />
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
        <div className="w-2/3 pt-12 pb-12">
      <h2 className="text-center drop-shadow-xl text-[50px]">About Us</h2>
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
    <div className="text-lightcream text-lightcream pt-28 pb-28 grid md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center">
      <h2 className="text-center p-2 text-xxl">Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        similique vero, unde earum placeat ab animi quo aut. Libero, ullam est
        hic consequuntur perferendis voluptates magnam error obcaecati quisquam
        minus?
      </p>
        </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
    <div className="bg-lightgreen flex flex-col text-center text-lightcream pt-14 pb-28">
      <h3 className="pb-16 text-center p-2 text-xxl">Meet Our Team</h3>
      <div className="container grid md:grid-cols-2 lg:grid-cols-2">
      <div className="">
        <img className="absolute" src={branch} alt="" />
        <img className="absolute" src={branch} alt="" />
        <div>
          <h3 className="text-xxl">Jerome</h3>
          <p>Front end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa
            nam praesentium alias sapiente quibusdam ad, architecto impedit ea
            possimus maiores aspernatur totam omnis explicabo nulla doloribus
            delectus dicta! Nemo.
          </p>
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="text-xxl">Rose</h3>
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
        <div className="">
          <h3 className="text-xxl">Charlotte</h3>
          <p>Front end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            magnam accusantium quisquam, cum quia consequatur minima unde
            reiciendis quis dolorum sint rem aspernatur placeat voluptatibus
            numquam expedita, molestias animi eum?
          </p>
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="text-xxl">Gaston</h3>
          <p>Back end developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            deleniti et soluta minima aspernatur numquam reprehenderit labore
            magni commodi, ratione tempora omnis exercitationem dolorem?
            Obcaecati excepturi omnis sed aliquam illum?
          </p>
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="text-xxl">Romain</h3>
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
  );
};

const OurSponsors = () => {
  return (
    <div className="bg-greenish flex flex-col items-center text-center text-lightcream pt-12 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <h3 className="pb-16 text-center p-2 text-xxl drop-shadow-xl">Our Sponsors</h3>
      <img src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus
        eius enim eaque nam cumque, architecto esse deserunt, minus excepturi
        aperiam commodi error nisi? Assumenda nihil facilis{" "}
      </p>
    </div>
    </div>
  );
};

export default AboutPage;
