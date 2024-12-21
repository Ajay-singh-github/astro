import axios from "axios";
import { useState } from "react";
import { Location as OptionLocation } from "@/components/more/Form";
import { VITE_API_KEY } from "@/api/userAPI";

export default function useLocation() {
  const [locationOptions, setLocationOptions] = useState<OptionLocation[]>([]);

  const getLocationOptions = async (city: string) => {
    if (!city.trim()) {
      setLocationOptions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${VITE_API_KEY}`
      );

      const locations = Array.isArray(response.data.response)
        ? response.data.response
        : [];

      // Filter locations based on the country
      const filteredLocations = locations.filter(
        (item: OptionLocation) => item.country === "IN"
      );

      setLocationOptions(filteredLocations);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    }
  };

  return [ locationOptions, getLocationOptions, setLocationOptions ];
}
