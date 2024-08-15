import { useParams } from 'react-router-dom';

// Import vehicle images
import hondaCivic from '../assets/images/Honda-Civic.webp';
import yamahaR15 from '../assets/images/YamahaR15.webp';

function VehicleDetail() {
  const { id } = useParams();
  
  const vehicleData = {
    1: { id: 1, name: 'Honda Civic', type: 'Car', price: '₹10,00,000', description: 'A reliable and stylish car.', image: hondaCivic },
    2: { id: 2, name: 'Yamaha R15', type: 'Bike', price: '₹1,50,000', description: 'A sleek and powerful bike.', image: yamahaR15 },
    // Add more vehicle data with their corresponding images
  };

  const vehicle = vehicleData[id] || {};

  return (
    <div className="p-6 bg-white text-black rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex-1 min-w-0">
        <h2 className="text-3xl font-bold mb-4">{vehicle.name}</h2>
        <p className="text-lg">Type: {vehicle.type}</p>
        <p className="text-lg">Price: {vehicle.price}</p>
        <p className="text-lg">Description: {vehicle.description}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <img src={vehicle.image} alt={vehicle.name} className="w-full h-auto object-contain rounded-lg" />
      </div>
    </div>
  );
}

export default VehicleDetail;
