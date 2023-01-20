
const ContactPage = () => {
    return (
        <div>
            <section class="p-8 relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f] " id="contact_page">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 p-8 ">
                    <div class="lg:col-span-7">
                        <h6 class="p-2 font-primaryFont text-xxl text-lightcream">Contact Us</h6>

                        <form action="#" class="space-y-8">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-secondaryFont text-gray-900 ">
                                    Your name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    class="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="name"
                                    required
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Your email adress
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    class="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="mail@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    class="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-secondaryFont text-gray-900  ">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    class="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <div class="relative mt-10">
                                <a href="https://www.google.be/" class="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Send
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section class="px-10 py-10 relative bg-greenish" id="style"></section>
        </div>
    );
};

export default ContactPage;
