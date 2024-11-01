
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, FileText, Printer, CreditCard } from 'lucide-react'
 
interface CartItem {
    id: number,
    item: string
    series: string,
    price: number,
    sqft: number,
    total: number,
}

const Cart=()=> {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            item: "Upper",
            series: "premmium",
            price: 302,
            sqft: 10,
            total: 4300
        },
        {
            id: 2,
            item: "Lower",
            series: "custom",
            price: 250,
            sqft: 12,
            total: 3500
        },
        {
            id: 3,
            item: "Door",
            series: "local",
            price: 150,
            sqft: 5,
            total: 800
        },
        {
            id: 4,
            item: "Window",
            series: "premium",
            price: 80,
            sqft: 3,
            total: 250
        },
        {
            id: 5,
            item: "Hardware",
            series: "premmhard",
            price: 50,
            sqft: 2,
            total: 120
        }
    ])

    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleSelectItem = (id: number) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        )
    }

    const handleSelectAll = () => {
        setSelectedItems(
            selectedItems.length === cartItems.length ? [] : cartItems.map(item => item.id)
        )
    }

    const handleDeleteSelected = () => {
        setCartItems(items => items.filter(item => !selectedItems.includes(item.id)))
        setSelectedItems([])
    }

    const calculateTotal = () => {
        return cartItems
            .filter(item => selectedItems.includes(item.id))
            .reduce((total, item) => total + item.total, 0)
    }

    const handleSavePDF = () => {
        console.log("Saving PDF...")
        // Implement PDF saving logic here
    }

    const handlePrintQuotation = () => {
        const printContent = document.createElement('div');
        printContent.className = 'printable-quotation';
    
        const billContent = `
          <style>
            /* Modern print styling */
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
            }
            .printable-quotation {
              font-family: 'Arial', sans-serif;
              padding: 20px;
              max-width: 100%;
              box-sizing: border-box;
              background: white;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
              border-bottom: 2px solid #2563eb;
              padding-bottom: 10px;
            }
            .company-name {
              font-size: 24px;
              font-weight: bold;
              color: #2563eb;
              margin: 0;
            }
            .quotation-title {
              font-size: 18px;
              color: #64748b;
              margin: 5px 0;
            }
            .quotation-date {
              color: #64748b;
              font-size: 12px;
            }
            .quotation-table {
              width: 100%;
              border-collapse: collapse;
              margin: 15px 0;
              font-size: 12px;
            }
            .quotation-table th {
              background-color: #2563eb;
              color: white;
              padding: 8px;
              text-align: left;
            }
            .quotation-table td {
              padding: 8px;
              border-bottom: 1px solid #e2e8f0;
            }
            .quotation-table tr:nth-child(even) {
              background-color: #f8fafc;
            }
            .summary-table {
              width: 100%;
              max-width: 350px;
              margin-left: auto;
              margin-top: 20px;
              border-top: 2px solid #2563eb;
            }
            .summary-table td {
              padding: 6px 8px;
            }
            .summary-title {
              color: #64748b;
              font-weight: 500;
            }
            .total-row {
              font-size: 16px;
              font-weight: bold;
              color: #2563eb;
            }
            .footer {
              margin-top: 20px;
              padding-top: 10px;
              border-top: 1px solid #e2e8f0;
              text-align: center;
              color: #64748b;
              font-size: 12px;
            }
            /* Print-specific styles */
            @media print {
              body * {
                visibility: hidden;
              }
              .printable-quotation, .printable-quotation * {
                visibility: visible;
              }
              .printable-quotation {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          </style>
    
          <div class="header">
            <h1 class="company-name">Solution Provider</h1>
            <p class="quotation-title">Quotation</p>
            <p class="quotation-date">Date: ${new Date().toLocaleDateString()}</p>
          </div>
    
          <table class="quotation-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Sq.ft</th>
                <th>Price (৳)</th>
                <th>Total (৳)</th>
              </tr>
            </thead>
            <tbody>
              ${cartItems
                .filter(item => selectedItems.includes(item.id))
                .map(item => `
                  <tr>
                    <td>${item.item}</td>
                    <td>${item.sqft}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${item.total.toLocaleString()}</td>
                  </tr>
                `)
                .join('')}
            </tbody>
          </table>
    
          <table class="summary-table">
            <tbody>
              <tr>
                <td class="summary-title">Subtotal (${selectedItems.length} items)</td>
                <td>৳${calculateTotal().toLocaleString()}</td>
              </tr>
              <tr>
                <td class="summary-title">Discount</td>
                <td>৳0</td>
              </tr>
              <tr>
                <td class="summary-title">Shipping Fee</td>
                <td>৳0</td>
              </tr>
              <tr class="total-row">
                <td>Estimated Total</td>
                <td>৳${calculateTotal().toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
    
          <div class="footer">
            <p>Thank you for your business!</p>
            <p>For any queries, please contact us at: solution.provider@gmail.com</p>
          </div>
        `;
    
        printContent.innerHTML = billContent;
        document.body.appendChild(printContent);
        window.print();
        document.body.removeChild(printContent);
      };
    
    
    







    const handlePOS = () => {
        console.log("Opening POS...")
        // Implement POS logic here
    }


    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <Checkbox
                        checked={selectedItems.length === cartItems.length}
                        onCheckedChange={handleSelectAll}
                        id="select-all"
                    />
                    <label htmlFor="select-all" className="ml-2 text-sm font-medium">
                        Select All ({cartItems.length} items)
                    </label>
                </div>
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDeleteSelected}
                    disabled={selectedItems.length === 0}
                >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Selected
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3">
                    <Table>
                        <TableHeader>
                            <TableRow className='bg-gray-50'>
                                <TableHead className="w-[50px]"></TableHead>
                                <TableHead className="w-[50px]">Index</TableHead>
                                <TableHead>Item</TableHead>
                                <TableHead>Series</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Sq.ft</TableHead>
                                <TableHead>Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cartItems.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedItems.includes(item.id)}
                                            onCheckedChange={() => handleSelectItem(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>{item.item}</TableCell>
                                    <TableCell>{item.series}</TableCell>
                                    <TableCell><span className='text-lg'>৳</span>{item.price}</TableCell>
                                    <TableCell>{item.sqft}</TableCell>
                                    <TableCell><span className='text-lg'>৳</span> {item.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="md:w-1/3">
                    <div className="bg-muted p-4 rounded-lg">
                        <h2 className="font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between">
                            <span>Total ({selectedItems.length} items)</span>
                            <div className='text-lg flex items-center justify-center'>
                                <span className='text-2xl pb-1'>৳</span>
                                <span>{calculateTotal()}</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <div className='text-lg flex items-center justify-center'>
                                <span className='text-2xl pb-1'>৳</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <div className='text-lg flex items-center justify-center'>
                                <span className='text-2xl pb-1'>৳</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated Total</span>
                            <div className='text-lg flex items-center justify-center'>
                                <span className='text-2xl pb-1'>৳</span>
                                <span>{calculateTotal()}</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <Button onClick={handleSavePDF} className="w-full">
                                    <FileText className="w-4 h-4 " />
                                    Save PDF
                                </Button>
                                <Button onClick={handlePOS} className="w-full">
                                    <CreditCard className="w-4 h-4 " />
                                    POS
                                </Button>
                            </div>


                            <Button onClick={handlePrintQuotation} className="w-full mt-1 bg-gray-600">
                                <Printer className="w-4 h-4" />
                                Print Quotation
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart