import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <main className="pt-24 p-6 flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-bold">Augments List</h1>

      <div className="flex flex-col gap-4 w-full max-w-lg">
        <Link to="/radi" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">Radi Augments</Link>
        <Link to="/raaza" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">Raaza Augments</Link>
        <Link to="/meta" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">Meta Augments</Link>
        <Link to="/ex-augments" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">EX Augments</Link>
      </div>
    </main>
  );
}
