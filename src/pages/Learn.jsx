import React, { useState } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";

const Learn = () => {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [processing, setProcessing] = useState(false);

  const generateManim = async () => {
    setLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/generate_manim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setVideoUrl(`http://127.0.0.1:5000${data.video_url}`);
      } else {
        setError(data.error || "Failed to generate animation");
      }
    } catch (err) {
      setError("An error occurred while processing your request.");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => setProcessing(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Learn with AtherAI</h1>
        
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter a topic or paste your text..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-grow p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={generateManim}
              disabled={loading}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {processing ? "Generating..." : "Generate Video"}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Analyze Notes</h3>
            <p className="text-gray-600">Upload your notes for AI-powered analysis and structuring</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Create Mind Map</h3>
            <p className="text-gray-600">Generate interactive mind maps from your content</p>
          </button>
        </div>

        <RadixDialog.Root>
          <RadixDialog.Trigger asChild>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Open Generator
            </button>
          </RadixDialog.Trigger>
          <RadixDialog.Portal>
            <RadixDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <RadixDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Enter prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <button
                onClick={generateManim}
                disabled={loading}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
              >
                {loading ? "Generating..." : "Generate Animation"}
              </button>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        </RadixDialog.Root>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {videoUrl && (
          <div className="mt-4">
            <video controls width="500">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
