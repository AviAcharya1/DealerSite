import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import vehicle images
import hondaCivic from '../assets/images/Honda-Civic.webp';
import yamahaR15 from '../assets/images/YamahaR15.webp';

function Inventory() {
  const [filter, setFilter] = useState('All');

  const vehicles = [
    { id: 1, name: 'Honda Civic', type: 'Car', price: '₹10,00,000', image: hondaCivic },
    { id: 2, name: 'Yamaha R15', type: 'Bike', price: '₹1,50,000', image: yamahaR15 },
    // Add more vehicles with their corresponding images
  ];

  const filteredVehicles = vehicles.filter(vehicle => 
    filter === 'All' || vehicle.type === filter
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">VEHICLES</h2>
      
      {/* Filter Buttons */}
      <div className="mb-6 flex justify-center space-x-4">
        <button 
          className={`px-4 py-2 rounded-lg ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${filter === 'Car' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('Car')}
        >
          Cars
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${filter === 'Bike' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('Bike')}
        >
          Bikes
        </button>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map(vehicle => (
          <div key={vehicle.id} className="p-6 bg-white text-black rounded-lg shadow-lg flex flex-col items-center">
            <div className="flex-1 min-w-0 text-center mb-4">
              <h3 className="text-2xl font-bold">{vehicle.name}</h3>
              <p>Type: {vehicle.type}</p>
              <p>Price: {vehicle.price}</p>
              <Link to={`/vehicle/${vehicle.id}`} className="text-primary hover:text-accent mt-2 block">View Details</Link>
            </div>
            <div className="w-full h-48">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
