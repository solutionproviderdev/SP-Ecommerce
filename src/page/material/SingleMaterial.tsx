
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productsData from '@/page/material/material.json';

// Placeholder for product data. Replace this with an API call or imported data.

const SingleMaterial = () => {
  const { id } = useParams();
//   console.log('-----flatmap',materials)
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product that matches the ID from the route parameter
    const materials = productsData.flatMap((category) => category.products);

    const foundProduct = materials.find((p) => p.id === id);
    setProduct(foundProduct);
    console.log('foundProduct',foundProduct)
  }, [id]);


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Single Product Page</h1>
      <div className="flex gap-6">
        {/* Left Section: Product Image Carousel */}
        <div className="w-1/3">
          <Carousel showArrows={true} showThumbs={true} infiniteLoop={true}>
            {product.map((product) => (
              <div key={product.id} className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    {/* <img className="w-full h-full object-cover" src={img} alt={`Slide ${index + 1}`} /> */}
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-2/3 space-y-4">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-muted-foreground">{product.description}</p>

          {/* Button Group */}
          <div className="flex space-x-3">
            <Button variant="outline">Premium</Button>
            <Button variant="outline">Economy</Button>
            <Button variant="outline">Standard</Button>
            <Button variant="outline">Custom</Button>
          </div>

          {/* Dropdowns for Product Options */}
          <div className="space-y-3">
            <div className="flex items-center">
              <p className="w-20">Board:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Board" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MDF-18mm">MDF-18mm</SelectItem>
                  <SelectItem value="Plywood">Plywood</SelectItem>
                  <SelectItem value="Particle Board">Particle Board</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <p className="w-20">Edging:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Edging" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aluminum">Aluminum</SelectItem>
                  <SelectItem value="ABS">ABS</SelectItem>
                  <SelectItem value="Wood Veneer">Wood Veneer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <p className="w-20">Surface:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Surface" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Glossy">Glossy</SelectItem>
                  <SelectItem value="Matte">Matte</SelectItem>
                  <SelectItem value="Textured">Textured</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <p className="w-20">Price:</p>
              <p className="text-lg font-semibold">{product.price}/sqft</p>
            </div>

            {/* Dimensions Input */}
            <div className="flex space-x-3">
              <Button variant="outline">Height</Button>
              <Button variant="outline">Width</Button>
              <Button variant="outline">Depth</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section: Total Calculation */}
      <div className="border border-dashed my-6"></div>
      <div className="space-y-3">
        <div className="flex items-center">
          <p>Total SquareFeet: </p>
          <p className="ml-2">20 BDT</p>
        </div>
        <div className="flex items-center">
          <p>Total Price: </p>
          <p className="ml-2">25000 BDT</p>
        </div>
        <Button variant="outline" className="w-full mt-4">Add to Cart</Button>
      </div>
    </div>
  );
};

export default SingleMaterial;
