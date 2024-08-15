import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-900 text-white p-6">

      </header>
      
      <main className="p-6">
        <h2 className="text-3xl font-bold my-4">Welcome to Our Dealership</h2>
        <section>
          <h3 className="text-2xl font-semibold">Featured Bike</h3>
          <p className="text-lg">Check out our latest offers on bikes.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">Featured Car</h3>
          <p className="text-lg">Find your perfect car today.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">Special Deals</h3>
          <p className="text-lg">Don't miss our special deals.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
