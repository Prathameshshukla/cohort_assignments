import React from "react";

const Hire = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find and Hire Freelancers</h2>
      <p className="text-gray-600">We found 1,348,858 Freelancers offering services online.</p>
      
      <div className="border rounded-lg p-4 mt-4 shadow-md">
        <h3 className="text-xl font-semibold">Scopic</h3>
        <p className="text-gray-500">Rutland, Massachusetts, United States</p>
        <p className="font-bold">$38/hr • Starting at $1K</p>
        <p className="text-gray-600">Web Application Development, Angular, API, AWS, Cloud Computing</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Get a Quote</button>
      </div>
    </div>
  );
};

export default Hire;
