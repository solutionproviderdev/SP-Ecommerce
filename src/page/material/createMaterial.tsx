
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Images for the carousel
import image1 from '../../assets/banner/banner1.jpg';
import image2 from '../../assets/banner/banner2.jpg';
import image3 from '../../assets/banner/banner3.jpg';

const CreateMaterial = () => {
  // Array of images to show in the carousel
  const images = [image1, image2, image3];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* Carousel Section */}
        <div className="w-full md:w-1/2">
          <Carousel 
            showArrows={true} 
            showThumbs={true} // Enables thumbnails
            infiniteLoop={true} 
            autoPlay={true} 
            interval={3000}
            thumbWidth={80} // Thumbnail width adjustment
            className="carousel-root"
          >
            {images.map((img, index) => (
              <div key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img className="w-full h-full object-cover" src={img} alt={`Slide ${index + 1}`} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Details Section */}
        <div className="space-y-3 md:w-1/2 mt-4 md:mt-0">
          <h3 className="text-lg font-bold">Kitchen Cabinet</h3>
          <p className="text-gray-600">Lower part</p>

          {/* Material Quality Buttons */}
          <div className="space-x-3">
            <Button variant="outline">Premium</Button>
            <Button variant="outline">Economy</Button>
            <Button variant="outline">Standard</Button>
            <Button variant="outline">Custom</Button>
          </div>

          {/* Select Options */}
          <div className="space-y-2">
            <div className="flex items-center">
              <p className="w-20">Board:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Board" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="mdf-18mm">MDF-18mm</SelectItem>
                    <SelectItem value="plywood-12mm">Plywood-12mm</SelectItem>
                    <SelectItem value="particle-board">Particle Board</SelectItem>
                    <SelectItem value="hdf-10mm">HDF-10mm</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <p className="w-20">Edging:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select an Edging" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pvc">PVC</SelectItem>
                    <SelectItem value="abs">ABS</SelectItem>
                    <SelectItem value="wood-veneer">Wood Veneer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <p className="w-20">Surface:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Surface" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="glossy">Glossy</SelectItem>
                    <SelectItem value="matte">Matte</SelectItem>
                    <SelectItem value="textured">Textured</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price Information */}
          <div className="flex items-center">
            <p className="w-20">Price: </p>
            <p className="text-lg font-semibold">৳1250/sqft</p>
          </div>

          {/* Dimension Buttons */}
          <div className="space-x-3">
            <Button variant="outline">Height</Button>
            <Button variant="outline">Width</Button>
            <Button variant="outline">Depth</Button>
          </div>
        </div>
      </div>

      <div className="border border-dashed my-6"></div>

      {/* Total Calculation Section */}
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center">
          <p className="mr-2 font-semibold">Total SquareFeet:</p>
          <p>20 BDT</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-2 font-semibold">Total Price:</p>
          <p>25000 BDT</p>
        </div>
        <Button variant="outline" className="mt-4">Add to Cart</Button>
      </div>
    </>
  );
};

export default CreateMaterial;
