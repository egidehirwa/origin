const ContactPage = () => {
    return (
        <div>
            <section class="px-10 py-10 relative bg-greenish" id="style"></section>

            <section class="p-8 relative bg-gradient-to-r from-[#7b8b7f] to-transparent" id="contact_page">
                <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div class="lg:col-span-7">
                        <div class="ltr:lg:ml-7 rtl:lg:mr-7">
                            <h6 class="p-2 font-primaryFont text-xxl text-lightcream">Contact Us</h6>

                            <h3 class="p-2 font-secondaryFont text-xl text-darkgreen">“Loading”</h3>

                            <div class="relative mt-10">
                                <a href="https://www.google.be/" class="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Send
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-10 py-10 relative bg-greenish" id="style"></section>
        </div>
    );
};

export default ContactPage;
