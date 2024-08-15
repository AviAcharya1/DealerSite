function About() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg relative">
          
          {/* Decorative Background Image */}
          <div className="absolute inset-0 opacity-10 bg-no-repeat bg-cover rounded-lg" 
               style={{ backgroundImage: `url('https://www.cardealerclayton.com/images/bg_image.jpg')` }}>
          </div>
  
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our trusted dealership, where we provide top-notch services and the best deals on bikes and cars in Bangalore. With years of experience in the automotive industry, our commitment is to ensure customer satisfaction and offer a wide selection of high-quality vehicles that meet your needs and preferences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our team of experienced professionals is dedicated to providing you with personalized assistance throughout the buying process. Whether you're looking for a sleek bike for city commuting or a reliable car for long road trips, we have something for everyone. Visit us today to explore our collection and experience unparalleled service.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Located in the heart of Bangalore, our dealership is your one-stop destination for all your automotive needs. Thank you for choosing us as your preferred vehicle partner.
          </p>
  
          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center">
            <img src="../assets/images/dealer.jpg" alt="Dealership Logo" className="w-24 h-24 rounded-full shadow-lg border-4 border-white" />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  