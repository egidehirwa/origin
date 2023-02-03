import contactImg from "../assets/background/contact.png";

const ContactPage = () => {
    return (
        <div>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>

            <section className="p-8 container mx-auto relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f] " id="contact_page">
                <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 p-8 ">
                    <div className="lg:col-span-7">
                        <h6 className="p-2 font-primaryFont text-xxl text-lightcream">Contact Us</h6>

                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-secondaryFont text-gray-900 ">
                                    Your name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Your email adress
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="mail@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <div className="relative mt-10">
                                <a href="https://www.google.be/" className="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Send
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-5 relative mt-16">
                        <img src={contactImg} className="" alt="" />
                    </div>
                </div>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>
        </div>
    );
};

export default ContactPage;
