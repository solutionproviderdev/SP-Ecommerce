import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
          {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
           <div>
            <h2 className="text-2xl font-bold mb-4">Solution Provider</h2>
            <p className="mb-4">Transforming spaces into beautiful homes since 2018. We offer a wide range of high-quality furniture and decor items.</p>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Solution Provider, 113/B Love Rd, Dhaka 1208</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+88019000000000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>solution.provider.dev@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest products and exclusive offers.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="w-full" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Solution Provider. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-primary transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-primary transition-colors mr-4">Terms of Service</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}