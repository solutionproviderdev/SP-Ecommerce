
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <nav className="bg-background p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="text-foreground hover:text-primary">
                    <div className="flex items-center space-x-2">
                        <Box className="h-6 w-6" />
                        <span className="text-lg font-semibold hidden sm:inline">Solution Provider</span>
                    </div>
                </Link>

                {/* Links Section for Desktop */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-foreground hover:text-primary">Home</Link>
                    <Link to="/products" className="text-foreground hover:text-primary">Products</Link>
                    <Link to="/materials" className="text-foreground hover:text-primary">Materials</Link>
                </div>

                {/* Search and Profile Section for Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Shopping Cart Icon */}
                    <Link to="/cart">
                    <div className='flex justify-center items-center h-10 hover:bg-slate-100 rounded-full'>
                        <ShoppingCart className="w-10 text-foreground cursor-pointer" />
                    </div>
                    </Link>
                    {/* Search Input */}
                    <div className="relative max-w-md w-full mx-auto">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-full"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-9 w-8 border-black border-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Cart and Search (Always Visible) */}
                <div className="flex md:hidden items-center space-x-2">
                    {/* Mobile Cart Icon */}
                    <div className='flex justify-center items-center h-10 w-10 hover:bg-slate-100 rounded-full'>
                        <ShoppingCart className="h-6 w-6 text-foreground cursor-pointer" />
                    </div>

                    {/* Mobile Search Input */}
                    <div className="relative w-full max-w-[150px]">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-1 rounded-full"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="p-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mt-4 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-2 px-4">
                    {/* Mobile Links */}
                    <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">Home</Link>
                    <Link to="/materials" className="text-foreground hover:text-primary transition-colors duration-200">Materials</Link>
                    <Link to="/products" className="text-foreground hover:text-primary transition-colors duration-200">Products</Link>

                    {/* Logout Button for Mobile */}
                    <Button
                        variant="ghost"
                        className="justify-center w-full bg-red-500 text-white hover:bg-red-600 mt-4 py-2 rounded-md"
                        onClick={handleLogout}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 mr-2"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
