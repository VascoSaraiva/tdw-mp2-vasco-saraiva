import React, { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Combobox } from "@headlessui/react";
import { addPlace } from "@/redux/slices/placesSlice";
import { FormProps, PlaceTextSearchResult } from "@/types";
import { useAppDispatch } from "@/redux/hooks";

const Form = ({ numberOfPlaces, setShowForm }: FormProps) => {
  const [queryState, setQueryState] = useState<string>("");
  const [textSearchApiResults, setTextSearchApiResults] = useState<
    PlaceTextSearchResult[]
  >([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [chosenPlaceId, setChosenPlaceId] = useState<string | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();

  function handleQueryChange(queryValue: string) {
    setQueryState(queryValue);

    if (queryValue.trim() !== "") {
      if (timer) clearTimeout(timer);

      const newTimer = setTimeout(() => {
        fetchApi(queryValue);
      }, 400);

      setTimer(newTimer);
    } else {
      if (timer) clearTimeout(timer);

      setTimer(null);
    }
  }

  async function fetchApi(queryValue: string) {

    let link : string = process.env.NEXT_PUBLIC_VERCEL_URL + `/api/textSearch/${queryValue}`;
    
    const response = await fetch(link);
    const data = await response.json();
    setTextSearchApiResults(data);
  }

  function handleChosenPlaceId(id: string) {
    setChosenPlaceId(id);
  }

  function handleAddPlace(id: string) {
    dispatch(addPlace(id));
    setSelectedOption("");
  }

  return (
    <div className="bg-white p-6 flex flex-col gap-4 rounded-md shadow-sm">
      <Combobox value={selectedOption} onChange={setSelectedOption}>
        <div className="flex w-full justify-between">
          <p>Place</p>
          {numberOfPlaces > 0 && (
            <DeleteOutlinedIcon
              className="cursor-pointer"
              onClick={() => setShowForm(false)}
            />
          )}
        </div>

        <div className="relative w-full">
          <Combobox.Input
            onChange={(event) => handleQueryChange(event.currentTarget.value)}
            className="input w-full"
            autoComplete="off"
            type="text"
            name="placeName"
            id="placeName"
            placeholder="The name of the place"
          />

          {textSearchApiResults.length === 0 && queryState !== "" ? (
            <div className="mx-auto max-w-[336px] rounded-md mt-[12px] py-4 border-2 bg-white shadow-md w-full flex flex-col gap-4 text-stone-500">
              <p className="px-6">Nothing found.</p>
            </div>
          ) : (
            queryState !== "" && (
              <Combobox.Options className="mx-auto max-w-[336px] rounded-md mt-3 py-2 border-2 bg-white shadow-md w-full flex flex-col text-stone-500">
                {textSearchApiResults.map((place) => (
                  <Combobox.Option
                    className="cursor-pointer px-6 hover:bg-gray-100 py-2"
                    key={place.place_id}
                    value={place.name}
                    onClick={() => handleChosenPlaceId(place.place_id)}
                  >
                    {place.name}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )
          )}
        </div>

        {chosenPlaceId != null && chosenPlaceId !== "" && (
          <button
            onClick={() => handleAddPlace(chosenPlaceId)}
            className="normalButton"
          >
            Add this place
          </button>
        )}
      </Combobox>
    </div>
  );
};

export default Form;
