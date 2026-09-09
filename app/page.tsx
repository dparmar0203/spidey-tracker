export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Spidey Tracker</h1>
      <p className="text-lg text-gray-300 max-w-xl">
        For 18 months, a city-wide tracker app has been logging reports of a
        masked vigilante swinging across a New York-inspired city.
      </p>
      <p className="text-2xl font-mono mt-8">86,631 sightings logged.</p>
    </main>
  );
}