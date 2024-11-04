
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Check } from "lucide-react";
  import img2 from "@/assets/banner/pexels_2.jpg";
import { Link } from "react-router-dom";
  
  export default function MaterialCard({ material }) {
    // Destructure necessary data from the material prop
    const { title, price, description, dimensions, finish, materials, features } = material;
  
    return (
      <Link to={`/materials/material/${material.id}`}>
      <Card className="w-full max-w-md mx-auto hover:shadow-2xl hover:border-2 hover:border-slate-400 ">
        <CardHeader>
          <div className="relative w-full h-48 mb-1">
            <img
              src={img2}  // Use the image from material data
              alt={title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-1">
            <span className="text-2xl font-bold">{price}</span>
            <Badge variant="secondary">{dimensions}</Badge>
          </div>
          <div>
            {finish && (
              <p>
                <strong>Finish:</strong> {finish}
              </p>
            )}
            <p>
              <strong>Materials:</strong> {materials.join(", ")}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
      </Link>
    );
  }
  