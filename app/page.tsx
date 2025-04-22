export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Welcome to Stacked</h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-10">
        Stacked is your all-in-one lead management and deal analysis tool, built to help real estate pros like you stay organized, close deals faster, and save time.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <a
          href="mailto:your@email.com"
          className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="border border-black px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
