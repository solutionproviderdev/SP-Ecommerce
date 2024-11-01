
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// // Sample material data
// const materialsData = {
//   Boards: [
//     { id: 1, name: 'MDF', type: '18mm', material: 'Woodchips', price: '৳1000', image: '/path/to/mdf.jpg' },
//     { id: 2, name: 'Gorazon', type: '12mm', material: 'Plywood', price: '৳1200', image: '/path/to/gorazon.jpg' },
//   ],
//   Surface: [
//     { id: 3, name: 'Rustic', type: 'Glossy', material: 'PVC', price: '৳1500', image: '/path/to/rustic.jpg' },
//   ],
//   Edging: [
//     { id: 4, name: 'Acrylic', type: 'Green', material: 'ABS', price: '৳1800', image: '/path/to/acrylic.jpg' },
//   ],
// };

// const AllMaterials = () => {
//   const { id } = useParams();  // `id` corresponds to the category in the URL
//   const materials = materialsData[id] || [];   
  
//   // State for filters
//   const [selectedBM, setSelectedBM] = useState('');
//   const [selectedThickness, setSelectedThickness] = useState('');
//   const [selectedSurface, setSelectedSurface] = useState('');
//   const [selectedEdging, setSelectedEdging] = useState('');

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-semibold mb-4">{`${id} Materials`}</h1>

//       {/* Filters Section */}
//       <div className="flex items-center justify-between mb-6">
//         <p className="text-muted-foreground">Total {`${id} Materials`}: {materials.length}</p>
//         <div className="flex gap-4">
//           {/* Category-Specific Filters */}
//           {id === "Boards" && (
//             <>
//               <Select onValueChange={(value) => setSelectedBM(value)}>
//                 <SelectTrigger className="w-[120px]"><SelectValue placeholder="BM" /></SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="bm1">BM Type 1</SelectItem>
//                   <SelectItem value="bm2">BM Type 2</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Select onValueChange={(value) => setSelectedThickness(value)}>
//                 <SelectTrigger className="w-[120px]"><SelectValue placeholder="Thickness" /></SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="18mm">18mm</SelectItem>
//                   <SelectItem value="25mm">25mm</SelectItem>
//                 </SelectContent>
//               </Select>
//             </>
//           )}

//           {id === "Surface" && (
//             <Select onValueChange={(value) => setSelectedSurface(value)}>
//               <SelectTrigger className="w-[120px]"><SelectValue placeholder="Surface Type" /></SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="rustic">Rustic</SelectItem>
//                 <SelectItem value="smooth">Smooth</SelectItem>
//               </SelectContent>
//             </Select>
//           )}

//           {id === "Edging" && (
//             <Select onValueChange={(value) => setSelectedEdging(value)}>
//               <SelectTrigger className="w-[120px]"><SelectValue placeholder="Edging Type" /></SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="pvc">PVC</SelectItem>
//                 <SelectItem value="abs">ABS</SelectItem>
//               </SelectContent>
//             </Select>
//           )}

//           <Button variant="outline">Create</Button>
//         </div>
//       </div>

//       {/* Materials Display Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {materials.map((material) => (
//           <Card key={material.id} className="overflow-hidden">
//             <CardContent className="p-4">
//               <div className="aspect-square relative mb-3">
//                 <img src={material.image} alt={material.name} className="object-cover rounded-lg" />
//               </div>
//               <div className="space-y-1">
//                 <h3 className="font-semibold text-lg">{material.name}</h3>
//                 <p className="text-muted-foreground">{material.type}</p>
//                 <p className="text-muted-foreground">{material.material}</p>
//                 <p className="font-medium text-lg">{material.price}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllMaterials;



// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// // Sample material data
// const MaterialsData = [
//     { id: 1, name: 'MDF', type: '18mm', material: 'Woodchips', price: '৳1000', image: '/path/to/mdf.jpg' },
//     { id: 2, name: 'Gorazon', type: '12mm', material: 'Plywood', price: '৳1200', image: '/path/to/gorazon.jpg' },

//     { id: 3, name: 'Rustic', type: 'Glossy', material: 'PVC', price: '৳1500', image: '/path/to/rustic.jpg' },

//     { id: 4, name: 'Acrylic', type: 'Green', material: 'ABS', price: '৳1800', image: '/path/to/acrylic.jpg' },
//   ]


// const Materials = () => {


//   return (
//     <div className="container mx-auto p-6">
//                       <h3 className="text-xl font-medium mb-2">Explore All Materials</h3>

//       {/* Filters Section */}
//       <div className="flex items-center justify-between mb-6">
//         <p className="text-muted-foreground">Total {` Materials`}: {MaterialsData?.length}</p>
//         <div className="flex gap-4">

//           {/* Category-Specific Filters */}

//           <Button variant="outline">Create</Button>
//         </div>
//       </div>

//       {/* Materials Display Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {MaterialsData.map((material) => (
//           <Card key={material.id} className="overflow-hidden">
//             <CardContent className="p-4">
//               <div className="aspect-square relative mb-3">
//                 <img src={material.image} alt={material.name} className="object-cover rounded-lg" />
//               </div>
//               <div className="space-y-1">
//                 <h3 className="font-semibold text-lg">{material.name}</h3>
//                 <p className="text-muted-foreground">{material.type}</p>
//                 <p className="text-muted-foreground">{material.material}</p>
//                 <p className="font-medium text-lg">{material.price}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Materials;











import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample material data
const materialsData = {
  Boards: [
    { id: 1, name: 'MDF', type: '18mm', material: 'Woodchips', price: '৳1000', image: '/path/to/mdf.jpg' },
    { id: 2, name: 'Gorazon', type: '12mm', material: 'Plywood', price: '৳1200', image: '/path/to/gorazon.jpg' },
  ],
  Surface: [
    { id: 3, name: 'Rustic', type: 'Glossy', material: 'PVC', price: '৳1500', image: '/path/to/rustic.jpg' },
  ],
  Edging: [
    { id: 4, name: 'Acrylic', type: 'Green', material: 'ABS', price: '৳1800', image: '/path/to/acrylic.jpg' },
  ],
};

const Materials = () => {
  const { id } = useParams();  // `id` corresponds to the category in the URL
  const materials = materialsData[id] || [];   
  
  // State for filters
  const [selectedBM, setSelectedBM] = useState('');
  const [selectedThickness, setSelectedThickness] = useState('');
  const [selectedSurface, setSelectedSurface] = useState('');
  const [selectedEdging, setSelectedEdging] = useState('');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">{`${id} Materials`}</h1>

      {/* Filters Section */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">Total {`${id} Materials`}: {materials.length}</p>
        <div className="flex gap-4">
          {/* Category-Specific Filters */}
          {id === "Boards" && (
            <>
              <Select onValueChange={(value) => setSelectedBM(value)}>
                <SelectTrigger className="w-[120px]"><SelectValue placeholder="BM" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="bm1">BM Type 1</SelectItem>
                  <SelectItem value="bm2">BM Type 2</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setSelectedThickness(value)}>
                <SelectTrigger className="w-[120px]"><SelectValue placeholder="Thickness" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="18mm">18mm</SelectItem>
                  <SelectItem value="25mm">25mm</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}

          {id === "Surface" && (
            <Select onValueChange={(value) => setSelectedSurface(value)}>
              <SelectTrigger className="w-[120px]"><SelectValue placeholder="Surface Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="rustic">Rustic</SelectItem>
                <SelectItem value="smooth">Smooth</SelectItem>
              </SelectContent>
            </Select>
          )}

          {id === "Edging" && (
            <Select onValueChange={(value) => setSelectedEdging(value)}>
              <SelectTrigger className="w-[120px]"><SelectValue placeholder="Edging Type" /></SelectTrigger>
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
        {materials.map((material) => (
          <Card key={material.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-3">
                <img src={material.image} alt={material.name} className="object-cover rounded-lg" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{material.name}</h3>
                <p className="text-muted-foreground">{material.type}</p>
                <p className="text-muted-foreground">{material.material}</p>
                <p className="font-medium text-lg">{material.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Materials;





