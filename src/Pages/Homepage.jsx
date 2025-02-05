import React from 'react';
import { Link } from 'react-router-dom';


export default function Homepage() {
  return (
      <div className="text-center">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl leading-[100%] font-semibold mb-4 md:mb-7 text-white ">Welcome to Task Management App</h1>
          <Link to="/task-manager">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Go to Task Manager</button>
          </Link>
      </div>
  )
}
