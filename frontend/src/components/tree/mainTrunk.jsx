import React, { useState } from "react";

const FamilyTree = () => {
  const [members, setMembers] = useState([
    {
      name: "John",
      children: [
        { name: "Jane", children: [] },
        { name: "Jim", children: [] },
      ],
    },
    { name: "Sarah", children: [] },
    { name: "Tom", children: [{ name: "Tim", children: [] }] },
  ]);

  const addMember = (parentIndex) => {
    const updatedMembers = [...members];
    updatedMembers[parentIndex].children.push({
      name: "New member",
      children: [],
    });
    setMembers(updatedMembers);
  };

  return (
    <div className="flex flex-col">
      {members.map((member, index) => (
        <div className="flex items-center mb-2" key={member.name}>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            {member.name[0]}
          </div>
          <div className="ml-2">{member.name}</div>
          <button
            className="ml-2 bg-blue-500 text-white rounded px-2 py-1"
            onClick={() => addMember(index)}
          >
            Add Child
          </button>
        </div>
      ))}
    </div>
  );
};

export default FamilyTree;
