import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">SlideForge</h1>

        <Link href="/generate">
          <button className="bg-purple-600 px-4 py-2 rounded-lg">
            Try Free
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mt-20 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Create AI-Powered <span className="text-purple-500">Presentations</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Generate beautiful PPTs instantly with AI. Just enter your topic.
        </p>

        <Link href="/generate">
          <button className="mt-6 bg-purple-600 px-6 py-3 rounded-xl text-lg">
            Generate PPT →
          </button>
        </Link>
      </div>

    </main>
  );
}