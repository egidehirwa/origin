function ProfileDetails() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-greenish">
                <p className="age text-blue-500 font-bold">Age</p>
                <p>32</p>
            </div>

            <div className="flex flex-col bg-greenish">
                <p className="text-blue-500 font-bold">Relations</p>
                <p>178</p>
            </div>

            <div className="flex flex-col bg-greenish items-center">
                <p className="text-blue-500 font-bold">Pictures</p>
                <p>8</p>
            </div>
        </div>
    );
}

export default ProfileDetails;