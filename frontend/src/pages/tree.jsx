import TreeForm from "../components/forms/treeForm";
import Tree from "../components/tree/treeComponent";


const TreePage = () => {
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

            <section className=" p-10 relative ">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12 p-8">
                    <div className="lg:col-span-10">
                        <div className="p-2 relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f] min-w-full min-h-full">
                            <Tree />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative">
                            <TreeForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TreePage;
