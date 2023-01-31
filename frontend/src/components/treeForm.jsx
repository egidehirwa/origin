import { useState } from "react";

const TreeForm = () => {
    const [checked, setChecked] = useState(false);
    const checkMe = () => {
        setChecked(!checked);
    };

    return (
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
            <div>
                <label for="image" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                    Attach an image
                </label>

                <div class="">
                    <div class="mt-8 flex ">
                        <div class="max-w-2xl rounded-lg bg-lightcream">
                            <div class="m-4">
                                <div class="flex w-56 items-center ">
                                    <label class="flex w-full flex-col border-4 border-dashed border-creemish ">
                                        <div class="flex flex-col items-center pt-7">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 text-gray-400 group-hover:text-gray-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                />
                                            </svg>
                                            <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Click here</p>
                                        </div>
                                        <input type="file" class="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
};

export default TreeForm;
