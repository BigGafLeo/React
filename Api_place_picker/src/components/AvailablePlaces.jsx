import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";

import { useState, useEffect } from "react";

import { fetchAvaiblePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setisFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setisFetching(true);

      try {
        const places = await fetchAvaiblePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setisFetching(false);
        });
      } catch (error) {
        seterror({ message: error.message || "dont fetch places" });
        setisFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <Error message={error.message} title={"Error ocured during fetichng"} />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="Fetching place data..."
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
