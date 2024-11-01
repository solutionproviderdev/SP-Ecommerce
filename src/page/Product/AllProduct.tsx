
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Grid, IdCard } from "lucide-react";
import image from '@/assets/banner/banner3.jpg';
import { cn } from '@/lib/utils';

const AllProduct = () => {
    const [toggleView, setToggleView] = useState(false);

    const materials = [
        {
            id: 1,
            name: "MDF-18mm",
            price: "$29.99",
            image: image,
            class: "Standard"
        },
        {
            id: 2,
            name: "Plywood-12mm",
            price: "$39.99",
            image: image,
            class: "Premium"
        },
        {
            id: 3,
            name: "Particle Board-15mm",
            price: "$19.99",
            image: image,
            class: "Economy"
        },
        {
            id: 4,
            name: "Oak Veneer-0.6mm",
            price: "$49.99",
            image: image,
            class: "Premium"
        },
        {
            id: 5,
            name: "Melamine-18mm",
            price: "$34.99",
            image: image,
            class: "Standard"
        },
        {
            id: 6,
            name: "Chipboard-22mm",
            price: "$24.99",
            image: image,
            class: "Economy"
        }
    ];

    return (
        <div>
            {/* Toolbar for Filters and View Toggle */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">{materials.length} Products</p>
                <div className="flex gap-4">
                    <Button variant="outline">Create</Button>

                    {/* Premium Filter Dropdown */}
                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Premium" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Premium">Premium</SelectItem>
                            <SelectItem value="Standard">Standard</SelectItem>
                            <SelectItem value="Economy">Economy</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button variant="outline">Shop Filter</Button>

                    {/* Toggle View Icon */}
                    <Button variant="ghost" size="icon" onClick={() => setToggleView(!toggleView)}>
                        {toggleView ? <Grid className="h-4 w-4" /> : <IdCard className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Product Grid */}
            <div className={`grid ${toggleView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                {materials.map((material) => (
                    <Card key={material.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="aspect-video relative">
                                <img
                                    src={material.image}
                                    alt={material.name}
                                    className="object-cover h-full"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <h3 className="font-semibold text-lg">{material.name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">{material.price}</span>
                                    <Badge
                                        className={cn(
                                            "px-2 py-1 rounded",
                                            material.class === "Premium"
                                                ? "bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-500 text-black"
                                                : material.class === "Standard"
                                                ? "bg-gradient-to-r from-gray-300 via-white to-slate-300 text-black"
                                                : "!bg-white text-black"
                                        )}
                                    >
                                        {material.class}
                                    </Badge>
                                </div>
                                <Button className="w-full bg-white hover:bg-gray-100" variant="outline">
                                    View Details
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AllProduct;
