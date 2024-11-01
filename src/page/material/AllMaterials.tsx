

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Grid, IdCard } from "lucide-react"
import { useState } from "react"

export default function AllMaterials() {
  const categories = ["Boards", "Surface", "Edging"]
  const [toggleView, setToggleView] = useState(false);

  const materials = [
    {
      id: 1,
      name: "MDF-18mm",
      price: "$29.99",
      image: "/placeholder.svg",
      class: "standard"
    },
    {
      id: 2,
      name: "Plywood-12mm",
      price: "$39.99",
      image: "/placeholder.svg",
      class: "premium"
    },
    {
      id: 3,
      name: "Particle Board-15mm",
      price: "$19.99",
      image: "/placeholder.svg",
      class: "economy"
    },
    {
      id: 4,
      name: "Oak Veneer-0.6mm",
      price: "$49.99",
      image: "/placeholder.svg",
      class: "premium"
    },
    {
      id: 5,
      name: "Melamine-18mm",
      price: "$34.99",
      image: "/placeholder.svg",
      class: "standard"
    },
    {
      id: 6,
      name: "Chipboard-22mm",
      price: "$24.99",
      image: "/placeholder.svg",
      class: "economy"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">Results: {materials.length}</p>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="BM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bm1">BM Type 1</SelectItem>
                    <SelectItem value="bm2">BM Type 2</SelectItem>
                    <SelectItem value="bm3">BM Type 3</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Thickness" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18mm">18mm</SelectItem>
                    <SelectItem value="25mm">25mm</SelectItem>
                    <SelectItem value="32mm">32mm</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Surface" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rustic">Rustic</SelectItem>
                    <SelectItem value="smooth">Smooth</SelectItem>
                    <SelectItem value="textured">Textured</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Edging" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pvc">PVC</SelectItem>
                    <SelectItem value="abs">ABS</SelectItem>
                    <SelectItem value="wood">Wood</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">Create</Button>

                <Button variant="ghost" size="icon" onClick={() => setToggleView(!toggleView)}>
                  {toggleView ? <Grid className="h-4 w-4" /> : <IdCard className="h-4 w-4" />}
                </Button>

                {/* <Button variant="ghost" size="icon">
                  <Grid className="h-4 w-4" />
                </Button> */}
              </div>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <Card key={material.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={material.image}
                        alt={material.name}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg">{material.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{material.price}</span>
                        <Badge
                          variant={
                            material.class === "premium" ? "default" :
                              material.class === "standard" ? "secondary" :
                                "outline"
                          }
                        >
                          {material.class}
                        </Badge>
                      </div>
                      <Button className="w-full" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}