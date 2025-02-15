import React, { useState } from 'react';

const Learn = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Implement API call for video generation
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Learn with AtherAI</h1>
        
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a topic or paste your text..."
              className="flex-grow p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? 'Generating...' : 'Generate Video'}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Analyze Notes</h3>
            <p className="text-gray-600">
              Upload your notes for AI-powered analysis and structuring
            </p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Create Mind Map</h3>
            <p className="text-gray-600">
              Generate interactive mind maps from your content
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Learn;