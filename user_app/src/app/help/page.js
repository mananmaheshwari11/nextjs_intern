'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [rating, setRating] = useState(1);
  const [selectedError, setSelectedError] = useState('');
  const [description, setDescription] = useState('');
  const errors = ['Audio Issue', 'Video Issue', 'Connectivity Issue', 'Login Issue', 'Miscellaneous'];

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedError) {
      alert('Please select an error type.');
      return;
    }
    alert(`Feedback submitted!\nRating: ${rating}\nError Type: ${selectedError}\nDescription: ${description}`);
  }

  return (
    <>
    <h1 className='text-4xl text-center font-serif mt-10'>userSphere Help</h1>
    <div className="flex justify-center items-center mt-20">
      <form className="w-96 p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center font-bold  mb-4">Feedback & Grievances</h2>
        <div className="mb-4">
          <label className="block font-semibold">Rating (1 to 5)</label>
          <input 
            type="number" 
            min="1" 
            max="5" 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Select Error Type</label>
          <select 
            value={selectedError} 
            onChange={(e) => setSelectedError(e.target.value)} 
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>Select an option</option>
            {errors.map((error, index) => (
              <option key={index} value={error}>{error}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full p-2 border rounded resize-none h-20"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-black text-white font-bold rounded hover:bg-blue-400">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
