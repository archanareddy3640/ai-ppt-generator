"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [slides, setSlides] = useState(5);
  const [tone, setTone] = useState("Formal");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
  const res = await fetch("/api/generate", {
    method: "POST",
    body: JSON.stringify({ topic, slidesCount: slides, tone }),
  });

  const data = await res.json();

  // 🛑 IMPORTANT CHECK
  if (data.error) {
    alert(data.error);
    return;
  }

  if (!data.file) {
    alert("No file generated");
    return;
  }

  // ✅ download only if valid
  const link = document.createElement("a");
  link.href =
    "data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64," +
    data.file;

  link.download = "presentation.pptx";
  link.click();
};

  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      <h1 className="text-4xl font-bold mb-8">
        Generate Your Presentation
      </h1>

      <div className="grid gap-5 max-w-xl">

        <input
          placeholder="Enter topic"
          className="p-4 rounded bg-gray-900"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <input
          type="number"
          className="p-4 rounded bg-gray-900"
          value={slides}
          onChange={(e) => setSlides(Number(e.target.value))}
        />

        <select
          className="p-4 rounded bg-gray-900"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Formal</option>
          <option>Creative</option>
          <option>Professional</option>
        </select>

        <button
          onClick={handleGenerate}
          className="bg-purple-600 p-4 rounded-lg"
        >
          Generate Slides 🚀
        </button>

      </div>

      {result && (
        <div className="mt-10 bg-gray-900 p-5 rounded">
          <h2 className="text-xl mb-2">Generated Slides:</h2>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}

    </div>
  );
}