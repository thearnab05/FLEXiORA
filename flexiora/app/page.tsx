export default function Home() {
  const bodyTypes = [
    {
      title: "Lean Body",
      description: "Achieve a slim, aesthetic, and shredded physique.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      title: "Muscular Body",
      description: "Build strength, muscle mass, and power.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
    {
      title: "Athletic Body",
      description: "Improve endurance, agility, and overall fitness.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Into Your Dream Body
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          Choose your fitness goal, track your progress, and unlock your
          ultimate transformation journey with FLEXiORA.
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition">
          Start Your Journey
        </button>
      </section>

      {/* Body Type Selection */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Goal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bodyTypes.map((body, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={body.image}
                alt={body.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{body.title}</h3>
                <p className="text-gray-400 mb-4">{body.description}</p>
                <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-6 border-t border-gray-800 text-center text-gray-500 mt-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} FLEXiORA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}