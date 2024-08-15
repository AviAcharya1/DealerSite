import { Outlet, Link } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-start to-end text-white">
      <header className="p-4 shadow-lg bg-gradient-to-r from-primary to-secondary">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dealership</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-neutral-500">Home</Link></li>
            <li><Link to="/inventory" className="hover:text-neutral-500">Inventory</Link></li>
            <li><Link to="/about" className="hover:text-neutral-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-neutral-500">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-6 mb-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
