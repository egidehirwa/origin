const TreePage = () => {
    return (
        <div>
            <section class="px-10 py-10 relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]" id="style">
                <h6 class="p-2 text-center font-primaryFont text-xxl text-darkgreen">Family Tree</h6>
                <p class=" text-center font-secondaryFont text-base text-lightcream">
                    A family tree is a diagram that shows the relationships between members of a family, including parents, grandparents, children, and
                    siblings. The purpose of a family tree is to provide a visual representation of a person's ancestry and lineage, as well as to trace the
                    history and origins of a family over time. From here you can create your own family tree and travel to your own roots.
                </p>
            </section>
            <section class="px-10 py-10 relative bg-greenish" id="style"></section>
            <section class=" p-8 relative ">
                <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div class="lg:col-span-8">
                        <div class="p-2  relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]">
                            Family tree will be here.
                            <br></br>Width will increase according to content
                        </div>
                    </div>
                    <div class="lg:col-span-4">
                        <div class="relative">
                            <form action="#" class="space-y-10">
                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        Relatives Type{" "}
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Father, Mother, Sister etc..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        First Name
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish  ">
                                        Last Name
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish  ">
                                        Year of Birth
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Year of Birth"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        Country of Birth
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Country of Birth"
                                        required
                                    />
                                </div>
                                <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish ">
                                    If your relative is alive, leave the box below blank.{" "}
                                </label>
                                <input
                                    id="link-checkbox"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 text-greenish  border-gray-300 rounded focus:ring-creemish "
                                />
                                <label for="info" class=" p-2 mb-2 text-sm font-secondaryFont text-creemish ">
                                    Not alive.
                                </label>

                                <div>
                                    <label for="info" class="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        According to the checkbox this will open = Year of Death
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        class="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Year of Death"
                                        required
                                    />
                                </div>
                                <div class="relative mt-10">
                                    <a href="https://www.google.be/" class="btn rounded-md px-4 py-4  bg-creemish text-black hover:bg-darkgreen">
                                        Edit
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TreePage;
