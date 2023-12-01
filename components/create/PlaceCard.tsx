import { PlaceDetails } from "@/types";
import React, { useEffect, useState } from "react";
import StarsRating from "./StarsRating";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removePlace } from "@/redux/slices/placesSlice";

const PlaceCard = ({ id }: { id: string }) => {
  let [data, setData] = useState<PlaceDetails>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlaceDetails = async () => {

      let link;

      if (process.env.VERCEL_URL) {
        link = "https://" + process.env.VERCEL_URL + `api/placeDetails/${id}`;
      } else {
        link = `http://localhost:3000/api/placeDetails/${id}`;
      }

      const response = await fetch(link);
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    if (id) {
      fetchPlaceDetails();
    }
  }, [id]);

  function handleDelete(id: string) {
    dispatch(removePlace(id));
  }

  if (data) {
    return (
      <div
        style={{
          backgroundImage: `url(${data.photo})`,
          backgroundSize: "cover",
        }}
        className="h-[290px] flex flex-col justify-between items-end  py-5 px-6 rounded-xl shadow-md relative"
      >
        <button
          className="w-10 h-10 flex justify-center items-center rounded-md bg-white shadow-lg"
          onClick={() => data && handleDelete(data.place_id)}
        >
          <DeleteOutlineIcon className="text-black cursor-pointer" />
        </button>

        <div className="flex flex-col justify-start w-full text-lg text-white gap-1.5 z-10">
          <h1 className="truncate font-bold ">{data.name}</h1>
          <div className="flex gap-1 items-center">
            <div className="flex text-yellow-400">
              <StarsRating rating={data.rating} />
            </div>
            <p className="text-sm font-normal">
              {data.user_ratings_total} Reviews
            </p>
          </div>
        </div>

        <div className="h-2/3 bg-gradient-to-t from-indigo-500 rounded-b-xl opacity-80 w-full absolute left-0 bottom-0"></div>
      </div>
    );
  } else {
    return <div className="h-[290px] bg-white animate-pulse rounded-md" />;
  }
};

export default PlaceCard;
