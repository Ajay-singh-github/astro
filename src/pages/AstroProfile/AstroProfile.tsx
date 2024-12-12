import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const AstroProfile = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [bookingType, setBookingType] = useState<"active" | "previous">(
    "active"
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const customers = [
    {
      id: 1,
      name: "Demo Name",
      phone: "91 XXXXX XXXX",
      email: "XYZ@gmail.com",
      slot: "30/10/24 , 10:20:00 AM",
      bookings: [
        {
          id: 1,
          slot: "29/09/24 , 10:20:00 AM",
          duration: "1Hr 30min",
          amount: 1500,
        },
        {
          id: 2,
          slot: "30/07/24 , 03:20:00 PM",
          duration: "1Hr 30min",
          amount: 1500,
        },
      ],
    },
    // Add more customer data as needed
  ];

  const bookedCustomers = {
    active: [
      {
        id: 1,
        name: "Demo Name",
        phone: "91 XXXXX XXXX",
        email: "XYZ@gmail.com",
        slot: "29/09/24 , 10:20:00 AM",
        meetLink: "Join",
      },
    ],
    previous: [
      {
        id: 1,
        name: "Demo Name",
        phone: "91 XXXXX XXXX",
        email: "XYZ@gmail.com",
        dateAndDuration: "29/09/24, 20Min",
        amount: 500,
      },
      {
        id: 2,
        name: "Demo Name",
        phone: "91 XXXXX XXXX",
        email: "XYZ@gmail.com",
        dateAndDuration: "29/09/24, 1Hr 30min",
        amount: 1800,
      },
    ],
  };

  const toggleRow = (id: any) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="bg-primary-200 min-h-screen">
      <div className="p-2 md:p-4 md:px-8 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div className="md:px-4 md:text-3xl font-semibold text-primary-300">
          LOGO
        </div>
        <div className="flex gap-3 md:gap-8 items-center w-full justify-end text-xs md:text-base">
          <div className="rounded-full p-1 md:p-2 flex items-center justify-center md:gap-2 bg-primary-200 w-[8rem] md:w-max">
            <CiSearch className="md:text-3xl opacity-50" />
            <input
              type="text"
              className="border-none outline-none md:w-full w-1/2 bg-transparent"
              placeholder="search"
            />
            <div className="rounded-full p-1 px-2 text-primary-200 md:px-4 md:text-md bg-secondary-100 text-center cursor-pointer">
              search
            </div>
          </div>
          <div>
            <RxAvatar className="text-2xl md:text-5xl" />
          </div>
        </div>
      </div>
      <div className="p-2 md:p-6 m-6 bg-primary-100 min-h-screen rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            {/* <img
              src="/api/placeholder/48/48"
              alt="Astrologer"
              className="w-full h-full object-cover"
            /> */}
            <RxAvatar className="text-2xl md:text-5xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Astrologer Name</h2>
            <p className="text-gray-600">XYZ@gmail.com</p>
          </div>
        </div>

        <div className="mb-4">
          <Input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <Tabs defaultValue="total">
          <TabsList className="mb-4">
            <TabsTrigger value="total" className="md:text-xl">
              Total Customers
            </TabsTrigger>
            <TabsTrigger value="booked" className="md:text-xl">
              Booked Customers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="total">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Sr.No</TableHead>
                      <TableHead>Customer's Name</TableHead>
                      <TableHead>Phone number</TableHead>
                      <TableHead>Email ID</TableHead>
                      <TableHead>Slot Booked</TableHead>
                      <TableHead>Bookings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer, index) => (
                      <React.Fragment key={customer.id}>
                        <TableRow>
                          <TableCell>
                            <input type="checkbox" />
                          </TableCell>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{customer.name}</TableCell>
                          <TableCell>{customer.phone}</TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell>{customer.slot}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              onClick={() => toggleRow(customer.id)}
                              className="text-orange-500"
                            >
                              View{" "}
                              {expandedRow === customer.id ? (
                                <ChevronUp className="ml-2" />
                              ) : (
                                <ChevronDown className="ml-2" />
                              )}
                            </Button>
                          </TableCell>
                        </TableRow>
                        {expandedRow === customer.id && (
                          <TableRow>
                            <TableCell colSpan={7}>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Sr.No</TableHead>
                                    <TableHead>Slot Booked</TableHead>
                                    <TableHead>Average Time</TableHead>
                                    <TableHead>Amount (Rs)</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {customer.bookings.map((booking, idx) => (
                                    <TableRow key={booking.id}>
                                      <TableCell>{idx + 1}</TableCell>
                                      <TableCell>{booking.slot}</TableCell>
                                      <TableCell>{booking.duration}</TableCell>
                                      <TableCell>{booking.amount}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="booked">
            <div className="flex justify-between items-center mb-4">
              <Select
                value={bookingType}
                onValueChange={(e: any) => setBookingType(e)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Booking Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="previous">Previous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Sr.No</TableHead>
                      <TableHead>Customers</TableHead>
                      <TableHead>Phone number</TableHead>
                      <TableHead>Email ID</TableHead>
                      {bookingType === "active" ? (
                        <>
                          <TableHead>Slot Booked</TableHead>
                          <TableHead>Meet Link</TableHead>
                        </>
                      ) : (
                        <>
                          <TableHead>Date & Duration</TableHead>
                          <TableHead>Amount (Rs)</TableHead>
                        </>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookedCustomers[bookingType].map(
                      (customer: any, index: any) => (
                        <TableRow key={customer.id}>
                          <TableCell>
                            <input type="checkbox" />
                          </TableCell>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{customer.name}</TableCell>
                          <TableCell>{customer.phone}</TableCell>
                          <TableCell>{customer.email}</TableCell>
                          {bookingType === "active" ? (
                            <>
                              <TableCell>{customer.slot}</TableCell>
                              <TableCell>
                                <Button
                                  variant="ghost"
                                  className="text-orange-500"
                                >
                                  {customer.meetLink}
                                </Button>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell>{customer.dateAndDuration}</TableCell>
                              <TableCell>{customer.amount}</TableCell>
                            </>
                          )}
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AstroProfile;
