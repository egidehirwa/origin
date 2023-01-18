import React from "react";

const ShopPage = () => {
    return (
        <div>
            <section class="px-24 py-24 relative bg-greenish" id="about">
                <p class="p-2 font-secondaryFont text-base text-creemish">Get ready for some unbeatable deals with our exclusive partners - don't miss out!</p>
            </section>

            <section class="px-6 py-4 relative bg-lightcream" id="about">
                <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="images/test.jpg" class="" alt="" />

                            <div class="absolute bottom-2/4 right-0 left-0 translate-y-2/4 text-center"></div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="ltr:lg:ml-7 rtl:lg:mr-7">
                            <h6 class="p-2 font-primaryFont text-xl text-darkgreen">Tree Home</h6>

                            <h3 class="p-2 font-secondaryFont text-xl text-darkgreen">“Home is where your heart is”</h3>

                            <p class="p-2 font-secondaryFont text-base text-darkgreen">
                                Tree Home is a furniture shop that focuses on selling environmentally responsible products. From sustainable wood pieces to
                                organic cotton textiles, they have everything you need to make your home stylish and earth-friendly. Upgrade your living space
                                while also reducing your carbon footprint at Eco Home Design.
                            </p>

                            <div class="relative mt-10">
                                <a href="#google" class="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Visit Here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="isolate bg-green-900 h-48 w-full flex items-end">
                <div class="pl-12">
                    <img src="images/Tree clock.png" class="h-80 " alt="" />
                </div>
            </section>
            <section class="px-6 py-4 relative bg-lightcream" id="about">
                <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div class="lg:col-span-7">
                        <div class="ltr:lg:ml-7 rtl:lg:mr-7">
                            <h6 class="p-2 font-primaryFont text-xl text-darkgreen">Family Fun</h6>

                            <h3 class="p-2 font-secondaryFont text-xl text-darkgreen">“A memory for all the good things”</h3>

                            <p class="p-2 font-secondaryFont text-base text-darkgreen">
                                Keep memories doesn’t have to be hard and a boring task to do. Trust Family fun to help you with your family albums. They have
                                everything you need to preserve and share your family's memories. Keep your family's history alive and create lasting memories
                                with Family Fun Shop
                            </p>

                            <div class="relative mt-10">
                                <a href="#google" class="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Visit Here
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="images/test.jpg" class="" alt="" />

                            <div class="absolute bottom-2/4 right-0 left-0 translate-y-2/4 text-center"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-14 py-14 relative bg-greenish" id="style"></section>

            <section class="">
                <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="images/test.jpg" class="" alt="" />

                            <div class="absolute bottom-2/4 right-0 left-0 translate-y-2/4 text-center"></div>
                        </div>
                    </div>
                    <div class="lg:col-span-7">
                        <div class="ltr:lg:ml-7 rtl:lg:mr-7">
                            <h6 class="p-2 font-primaryFont text-xl text-darkgreen">DNAncestry</h6>

                            <h3 class="p-2 font-secondaryFont text-xl text-darkgreen">“DNA doesn’t lie”</h3>

                            <p class="p-2 font-secondaryFont text-base text-darkgreen">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Tortor id aliquet lectus proin nibh nisl condimentum id. Euismod quis viverra nibh cras pulvinar mattis.
                            </p>

                            <div class="relative mt-10">
                                <a href="#google" class="btn rounded-md px-4 py-4  bg-greenish text-white hover:bg-creemish">
                                    Visit Here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="isolate bg-green-900 h-48 w-full flex items-end">
                <div class="pl-12">
                    <img src="images/Tree clock.png" class="h-80 " alt="" />
                </div>
            </section>
        </div>
    );
};

export default ShopPage;
