
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import materialsData from '@/page/material/material.json';

const ProductDisplay = () => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(0);
  const imageRef = useRef(null);
  const ZOOM_LEVEL = 2.5;
  const { id } = useParams(); // `id` corresponds to the category name in the URL

  const materials = materialsData.flatMap((category) => category.products);
  const singleMaterial=materials.find(m=> m.id==id)
  console.log('form single material page',singleMaterial)

  // Sample images - replace with your actual imports

  const noImages="https://www.shutterstock.com/shutterstock/photos/2057829641/display_1500/stock-vector-no-image-available-picture-coming-soon-missing-photo-image-sign-illustration-vector-2057829641.jpg"

  const images = [
    "https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg",
    "https://img.freepik.com/free-photo/front-view-cooked-pastry-along-with-red-white-sauces-brown-wooden-round-desk-grey-floor_140725-14395.jpg?t=st=1730717902~exp=1730721502~hmac=2d9381c856afadf75a050463e4753a4f4ea48f12d5500abd1d4c2be56834365b&w=360",
    "https://img.freepik.com/free-photo/front-view-pizza-with-red-tomatoes-cheese-brown-wooden-round-desk-grey-floor_140725-14480.jpg?t=st=1730717928~exp=1730721528~hmac=029dc201045347164dacafcb248da21a6e0dc09cab3f30953f5489cec478e9a3&w=360",
    "https://www.shutterstock.com/shutterstock/photos/2491123299/display_1500/stock-photo-background-from-fresh-green-spinach-leaves-with-water-drops-texture-of-raw-organic-baby-spinach-2491123299.jpg",
    "https://www.shutterstock.com/shutterstock/photos/2444927759/display_1500/stock-photo-healthy-food-is-nutrient-rich-and-supports-overall-well-being-by-providing-essential-vitamins-2444927759.jpg",
    "https://img.freepik.com/free-photo/creative-assortment-with-different-books_23-2148851018.jpg?t=st=1730720377~exp=1730723977~hmac=3aabc258198c09eab7d432e8eafb2af3554c77ba4b35623d4ea4afe4931e3238&w=900"
  ];

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setMagnifierPosition({ x, y });
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto p-4">
      {/* Left side - Carousel with magnifier */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative">
          {/* Main Image with Magnifier */}
          <div 
            className="relative w-full cursor-zoom-in"
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={imageRef}
              src={images[selectedImage] ? images[selectedImage] : noImages }
              alt={`Product view ${selectedImage + 1}`}
              className="w-full h-96 object-cover rounded-lg "
            />
            
            {/* Hover indicator */}
            <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full flex items-center gap-2">
              <Search size={16} />
              <span className="text-sm">Hover to zoom</span>
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex mt-4 space-x-2 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded overflow-hidden transition-all ${
                  selectedImage === index 
                    ? 'ring-2 ring-blue-500' 
                    : 'ring-1 ring-gray-200 hover:ring-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Product details with magnified overlay */}
      <div className="w-full md:w-1/2 relative">
        {/* Magnified view overlay */}
        {showMagnifier && (
          <div className="absolute inset-0 z-50 rounded-lg overflow-hidden">
            <div
              className="w-full h-96 object-cover"
              style={{
                backgroundImage: `url(${images[selectedImage]})`,
                backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
                backgroundSize: `${ZOOM_LEVEL * 100}%`,
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        )}

        {/* Product details */}
        <Card className={`${showMagnifier ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">{singleMaterial.title}</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{singleMaterial.description}</h2>
                <p className="text-gray-600">
                  Delicious homemade stewed white beans with tender sliced pumpkin, 
                  simmered in a rich tomato sauce. This hearty dish combines the creamy 
                  texture of beans with the sweet, seasonal flavor of pumpkin.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Made with fresh, seasonal ingredients</li>
                  <li>Rich in protein and fiber</li>
                  <li>Vegetarian friendly</li>
                  <li>Perfect for cold weather</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Price:</h2>
                <p className="text-3xl font-bold text-green-600">{singleMaterial.price}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg 
                               hover:bg-blue-700 transition-colors mt-6">
                Add to Cart
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDisplay;
