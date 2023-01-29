const ShopPage = () => {
    return (
        <div>
            <section className="px-20 py-20  relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]" id="style">
                <p className=" text-center font-primaryFont text-xl  text-lightcream">
                    Get ready for some unbeatable deals with our exclusive partners - don't miss out!
                </p>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>
            <section className=" p-8 relative bg-gradient-to-r from-[#dbe0de] to-[#7b8b7f]">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div className="lg:col-span-7">
                        <h6 className="p-2 font-primaryFont text-xxl text-darkgreen">Tree Home</h6>

                        <h3 className="p-2 font-secondaryFont text-xl text-darkgreen">“Home is where your heart is”</h3>

                        <p className="p-2 font-secondaryFont text-base text-darkgreen ">
                            Tree Home is a furniture shop that focuses on selling environmentally responsible products. From sustainable wood pieces to organic
                            cotton textiles, they have everything you need to make your home stylish and earth-friendly. Upgrade your living space while also
                            reducing your carbon footprint at Eco Home Design.
                        </p>

                        <div className="relative mt-10">
                            <a href="https://www.google.be/" className="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                Visit Here
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="images/shop_pic_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>

            <section className=" p-8 relative bg-gradient-to-r from-[#7b8b7f] to-[#dbe0de]">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="images/shop_pic_2.png" alt="" />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <h6 className="p-2 font-primaryFont text-xxl text-darkgreen">Family Fun</h6>

                        <h3 className="p-2 font-secondaryFont text-xl text-darkgreen">“A memory for all the good things”</h3>

                        <p className="p-2 font-secondaryFont text-base text-darkgreen">
                            Keep memories doesn’t have to be hard and a boring task to do. Trust Family fun to help you with your family albums. They have
                            everything you need to preserve and share your family's memories. Keep your family's history alive and create lasting memories with
                            Family Fun Shop
                        </p>

                        <div className="relative mt-10">
                            <a href="https://www.google.be/" className="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                Visit Here
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>
            <section className=" p-8 relative bg-gradient-to-r from-[#dbe0de] to-[#7b8b7f]">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div className="lg:col-span-7">
                        <h6 className="p-2 font-primaryFont text-xxl text-darkgreen">DNAncestry</h6>

                        <h3 className="p-2 font-secondaryFont text-xl text-darkgreen">“DNA doesn’t lie”</h3>

                        <p className="p-2 font-secondaryFont text-base text-darkgreen">
                            Your Y-DNA matches will share a common ancestor with you on your direct paternal line. That common ancestor can be recent (meaning
                            within a generation or two) or more distant (living up to around 1,000 years ago). The tools and data gained through a Y-DNA test
                            can help you learn more about your patrilineal family history.
                        </p>

                        <div className="relative mt-10">
                            <a href="https://www.google.be/" className="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                Visit Here
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="images/shop_pic_3.png" className="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>
        </div>
    );
};

export default ShopPage;
