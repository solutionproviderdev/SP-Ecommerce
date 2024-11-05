import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import materialsData from "@/page/material/material.json"; // Adjust the import path as needed
import MaterialCard from "./MaterialCard";

const Materials = () => {
const {cetegory} = useParams(); // `id` corresponds to the category name in the URL
  console.log(cetegory)
  const [selectedCategory, setSelectedCategory] = useState(cetegory);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  // Update selectedCategory and filteredMaterials whenever `id` changes
  useEffect(() => {
    setSelectedCategory(cetegory);
  }, [cetegory]);

  useEffect(() => {
    // Find the category that matches selectedCategory
    const categoryData = materialsData.find(
      (category) => category.name === selectedCategory
    );
    if (categoryData) {
      setFilteredMaterials(categoryData.products || []);
    } else {
      setFilteredMaterials([]);  
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">{`${selectedCategory} Materials`}</h1>

      {/* Filters Section */}
      <div className="flex items-center justify-end mb-6">
        <div className="flex gap-4 ">
          {/* Category-Specific Filters */}
          {selectedCategory === "Boards" && (
            <>
              <Select
                onValueChange={(value) =>
                  console.log("BM Type selected:", value)
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="BM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bm1">BM Type 1</SelectItem>
                  <SelectItem value="bm2">BM Type 2</SelectItem>
                </SelectContent>
              </Select>

              <Select
                onValueChange={(value) =>
                  console.log("Thickness selected:", value)
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Thickness" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18mm">18mm</SelectItem>
                  <SelectItem value="25mm">25mm</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}

          {selectedCategory === "Surfacing" && (
            <Select
              onValueChange={(value) =>
                console.log("Surface Type selected:", value)
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Surface Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="glossy">Glossy</SelectItem>
                <SelectItem value="matte">Matte</SelectItem>
              </SelectContent>
            </Select>
          )}

          {selectedCategory === "Edging" && (
            <Select
              onValueChange={(value) =>
                console.log("Edging Type selected:", value)
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Edging Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pvc">PVC</SelectItem>
                <SelectItem value="abs">ABS</SelectItem>
              </SelectContent>
            </Select>
          )}

          <Button variant="outline">Create</Button>
        </div>
      </div>

      {/* Materials Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <MaterialCard key={material?.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default Materials;
