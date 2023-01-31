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
