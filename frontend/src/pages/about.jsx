
const AboutPage = ({ logedIn }) => {
    return (
        <>
            <AboutUs />
            <OurMission />
            <MeetOurTeam />
            <OurSponsors />
        </>
    )
}

const AboutUs = () => {
    return (
        <div className="bg-lightgreen flex flex-col items-center text-center text-lightcream pt-28 pb-28">
            <h2 className="text-center text-3xl">About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique vero, unde earum placeat ab animi quo aut. Libero, ullam est hic consequuntur perferendis voluptates magnam error obcaecati quisquam minus?</p>
        </div>
    )
}

const OurMission = () => {
    return (
        <div className="text-lightcream flex flex-col items-center text-center text-lightcream pt-28 pb-28">
            <h2>Our mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique vero, unde earum placeat ab animi quo aut. Libero, ullam est hic consequuntur perferendis voluptates magnam error obcaecati quisquam minus?</p>
            <img src="./" alt="" />
        </div>
    )
}

const MeetOurTeam = () => {
    return (
        <div className="bg-lightgreen flex flex-col text-center text-lightcream pt-14 pb-28">
            <h3 className="pb-16">Meet Our Team</h3>
            <div className="flex flex-col items-left">
                <h3>Jerome</h3>
                <p>Front end developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa nam praesentium alias sapiente quibusdam ad, architecto impedit ea possimus maiores aspernatur totam omnis explicabo nulla doloribus delectus dicta! Nemo.</p>
                <img src="" alt="" />
            </div>
            <div className="flex flex-col items-right">
                <h3>Charlotte</h3>
                <p>Front end developer</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum magnam accusantium quisquam, cum quia consequatur minima unde reiciendis quis dolorum sint rem aspernatur placeat voluptatibus numquam expedita, molestias animi eum?</p>
                <img src="" alt="" />
            </div>
            <div>
                <h3>Rose</h3>
                <p>Front end developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit doloribus modi? Eos rerum a mollitia eligendi voluptatem, doloremque dolore fugit autem eveniet suscipit, iste hic, nemo facere odio reprehenderit?</p>
                <img src="" alt="" />
            </div>
            <div>
                <h3>Gaston</h3>
                <p>Back end developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti et soluta minima aspernatur numquam reprehenderit labore magni commodi, ratione tempora omnis exercitationem dolorem? Obcaecati excepturi omnis sed aliquam illum?</p>
                <img src="" alt="" />
            </div>
            <div>
                <h3>Romain</h3>
                <p>Back end developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sint voluptas labore eaque natus, porro accusantium autem veritatis saepe corporis error eius ipsa officia, beatae facilis neque magnam veniam velit.</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

const OurSponsors = () => {
    return (
        <div className="bg-greenish flex flex-col items-center text-center text-lightcream pt-28 pb-28">
            <h3>Our Sponsors</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus eius enim eaque nam cumque, architecto esse deserunt, minus excepturi aperiam commodi error nisi? Assumenda nihil facilis </p>
        </div>
    )
}

export default AboutPage;