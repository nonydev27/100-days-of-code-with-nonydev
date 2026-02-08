"use client";

// import {useState} from "react";

// const [backgroundColor, setBackgroundColor] = useState("white");
export default function app() {
  return (
    
    <div className="font-sans flex items-center justify-center min-h-screen py-2">
      <div className="space-x-2 ">
        <button className="bg-red-400 p-4 uppercase text-white font-bold hover:bg-red-600">red</button>
       <button className="bg-blue-400 p-4 uppercase text-white font-bold hover:bg-red-600">blue</button>
       <button className="bg-green-400 p-4 uppercase text-white font-bold hover:bg-red-600">green</button>
       <button className="bg-gray-400 p-4 uppercase text-white font-bold hover:bg-red-600">random</button>
      </div>
    </div>

  );
}
