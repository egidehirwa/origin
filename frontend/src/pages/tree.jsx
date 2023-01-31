import { useState } from "react";

const TreePage = () => {
    const [checked, setChecked] = useState(false);
    const checkMe = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <section className="px-10 py-10 relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]" id="style">
                <h6 className="p-2 text-center font-primaryFont text-xxl text-darkgreen">Family Tree</h6>
                <p className=" text-center font-secondaryFont text-base text-lightcream">
                    A family tree is a diagram that shows the relationships between members of a family, including parents, grandparents, children, and
                    siblings. The purpose of a family tree is to provide a visual representation of a person's ancestry and lineage, as well as to trace the
                    history and origins of a family over time. From here you can create your own family tree and travel to your own roots.
                </p>
            </section>
            <section className="px-10 py-10 relative bg-greenish" id="style"></section>
            <section className=" p-8 relative ">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div className="lg:col-span-10">
                        <div className="p-2  relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]">
                            Family tree will be here.
                            <br></br>Width will increase according to content
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <form action="#" className="space-y-10">
                                <div>
                                    <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        Relatives Type{" "}
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Father, Mother, Sister etc..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        First Name
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                                        Last Name
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                                        Year of Birth
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Year of Birth"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                                        Country of Birth
                                    </label>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Country of Birth"
                                        required
                                    />
                                </div>
                                <label for="info" className="block mb-2 text-sm font-secondaryFont text-creemish" data-headlessui-state="open">
                                    If your relative is alive, leave the box below blank.{" "}
                                </label>

                                <input
                                    id="link-checkbox"
                                    type="checkbox"
                                    onChange={checkMe}
                                    value=""
                                    className="w-4 h-4 text-greenish  border-gray-300 rounded accent-white checked focus:ring-creemish "
                                />
                                <label for="info" className=" p-2 mb-2 text-sm font-secondaryFont text-creemish " data-headlessui-state="open">
                                    Not alive.
                                </label>
                                <div style={{ display: checked ? "block" : "none" }}>
                                    <input
                                        type="info"
                                        id="info"
                                        className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                                        placeholder="Year of Death"
                                        required
                                    />
                                </div>

                                <div className="relative mt-10">
                                    <a href="https://www.google.be/" className="btn rounded-md px-4 py-4  bg-creemish text-black hover:bg-darkgreen">
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
