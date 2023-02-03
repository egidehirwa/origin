import { useState } from "react";
import axios from "axios";

const TreeForm = () => {
    // const [checked, setChecked] = useState(false);
    // const checkMe = () => {
    //     setChecked(!checked);
    // };

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitInfo = (ev) => {
        ev.preventDefault();
        axios.post("https://origin-app.herokuapp.com/tree", {
            name: name,
            lastName: lastName,
        });
        console.log("lalala its working lalala zombies are real llalalal");
    };

    return (
        <form className="space-y-10" onSubmit={submitInfo}>
            {/* <div>
                <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                    Relatives Type{" "}
                </label>
                <input
                    type="info"
                    id="info"
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="Father, Mother, Sister etc..."
                    required
                />
            </div> */}
            <div>
                <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                    First Name
                </label>
                <input
                    type="info"
                    id="info"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="First Name"
                    required
                />
            </div>
            <div>
                <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                    Last Name
                </label>
                <input
                    type="info"
                    id="info"
                    value={lastName}
                    onChange={(ev) => setLastName(ev.target.value)}
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="Last Name"
                    required
                />
            </div>
            {/* <div>
                <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                    Year of Birth
                </label>
                <input
                    type="info"
                    id="info"
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="Year of Birth"
                    required
                />
            </div> */}
            {/* <div>
                <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish ">
                    Country of Birth
                </label>
                <input
                    type="info"
                    id="info"
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="Country of Birth"
                    required
                />
            </div> */}
            {/* <div>
                <label htmlFor="image" className="block mb-2 text-sm font-secondaryFont text-creemish  ">
                    Attach an image
                </label>

                <div className="mt-8 flex ">
                    <div className="max-w-2xl rounded-lg bg-lightcream">
                        <div className="m-4">
                            <div className="flex w-56 items-center ">
                                <label className="flex w-full flex-col border-4 border-dashed border-creemish ">
                                    <div className="flex flex-col items-center pt-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400 group-hover:text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>
                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Click here</p>
                                    </div>
                                    <input type="file" className="opacity-0" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <label htmlFor="info" className="block mb-2 text-sm font-secondaryFont text-creemish" data-headlessui-state="open">
                If your relative is alive, leave the box below blank.{" "}
            </label> */}

            {/* <input
                id="link-checkbox"
                type="checkbox"
                onChange={checkMe}
                value=""
                className="w-4 h-4 text-greenish  border-gray-300 rounded accent-white checked focus:ring-creemish "
            />
            <label htmlFor="info" className=" p-2 mb-2 text-sm font-secondaryFont text-creemish " data-headlessui-state="open">
                Not alive.
            </label>
            <div style={{ display: checked ? "block" : "none" }}>
                <input
                    type="info"
                    id="info"
                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-64 p-2.5 bg-lightcream "
                    placeholder="Year of Death"
                />
            </div> */}

            <button className="relative mt-10 btn rounded-md px-4 py-4  bg-creemish text-black hover:bg-darkgreen">Edit</button>
        </form>
    );
};

export default TreeForm;
