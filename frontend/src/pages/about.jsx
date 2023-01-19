import DesktopHeader from "../components/header/desktopHeader"

const AboutPage = ({logedIn}) => {
    return (
        <>
        <DesktopHeader logedIn={logedIn} />
        <AboutUs />
        <OurMission />
        <MeetOurTeam />
        <OurSponsors />
        </>
    )
}

const AboutUs = () => {
    return (
        <div>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique vero, unde earum placeat ab animi quo aut. Libero, ullam est hic consequuntur perferendis voluptates magnam error obcaecati quisquam minus?</p>
        </div>
    )
}

const OurMission = () => {
    return (
        <div>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique vero, unde earum placeat ab animi quo aut. Libero, ullam est hic consequuntur perferendis voluptates magnam error obcaecati quisquam minus?</p>
        </div>
    )
}

const MeetOurTeam = () => {
    return (
        <div>
            <h3>Jerome</h3>
            <p>Front end developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa nam praesentium alias sapiente quibusdam ad, architecto impedit ea possimus maiores aspernatur totam omnis explicabo nulla doloribus delectus dicta! Nemo.</p>
            <h3>Charlotte</h3>
            <p>Front end developer</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum magnam accusantium quisquam, cum quia consequatur minima unde reiciendis quis dolorum sint rem aspernatur placeat voluptatibus numquam expedita, molestias animi eum?</p>
            <h3>Rose</h3>
            <p>Front end developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit doloribus modi? Eos rerum a mollitia eligendi voluptatem, doloremque dolore fugit autem eveniet suscipit, iste hic, nemo facere odio reprehenderit?</p>
            <h3>Gaston</h3>
            <p>Back end developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti et soluta minima aspernatur numquam reprehenderit labore magni commodi, ratione tempora omnis exercitationem dolorem? Obcaecati excepturi omnis sed aliquam illum?</p>
            <h3>Romain</h3>
            <p>Back end developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sint voluptas labore eaque natus, porro accusantium autem veritatis saepe corporis error eius ipsa officia, beatae facilis neque magnam veniam velit.</p>
        </div>
    )
}

const OurSponsors = () => {
    return (
        <>
        </>
    )
}

export default AboutPage;