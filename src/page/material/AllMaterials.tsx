
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Grid, IdCard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import materialsData from "@/page/material/material.json";  // Adjust the import path as needed
import MaterialCard from "./MaterialCard";

export default function AllMaterials() {
    const [toggleView, setToggleView] = useState(false);

    // Flatten all products from all categories into a single array
    const materials = materialsData.flatMap((category) => category.products);
    console.log("AllMaterials",materials)

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-2xl mb-6">All Materials</h2>
                    <div className="flex gap-4">
                        {/* Toggle view button */}
                        <Button variant="ghost" size="icon" onClick={() => setToggleView(!toggleView)}>
                            {toggleView ? <Grid className="h-4 w-4" /> : <IdCard className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                {/* Materials Grid */}
                <div className={`grid gap-6 ${toggleView ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                    {materials.map(material => (
                        <MaterialCard key={material?.id} material={material} />
                    ))}
                </div>
            </main>
        </div>
    );
}
