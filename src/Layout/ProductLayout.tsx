import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
import { Grid, IdCard, Search, ShoppingCart } from "lucide-react"
import { Link, Outlet } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
const ProductLayout = () => {
  const [toggleView, setToggleView] = useState(false)
  const categories = ["Kitchen", "Bedroom", "Drawing", "Cealing", "Dinning"]

  const products = [
    {
      id: 1,
      name: "Modern Kitchen Cabinet",
      price: "$299.99",
      type: "premium",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Bedroom Nightstand",
      price: "$149.99",
      type: "standard",
      image: "/placeholder.svg"
    },
    // Add more products as needed
  ]

  return (
    <div className="min-h-[450px] bg-background">

      <main className="container mx-auto px-4  ">
        <div className="flex gap-4">
          {/* Sidebar */}
          {/* <aside className="w-2/12 shrink-0 border-r-2 pr-2"> */}
          <aside className="w-2/12 shrink-0 border-r-2 pr-1 max-h-screen sticky top-[4rem]">
        <h2 className="font-semibold text-2xl mb-4 px-2">All Products</h2>
            <nav>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products/${category}`}
                  className="block px-4 py-2 mb-1 rounded-lg hover:bg-accent border-b-2"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            

            {/* outlet is hare */}
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
export default ProductLayout