import { useAppDispatch } from "@/redux/hooks";
import { saveTitle } from "@/redux/slices/tourDetails";
import React, { useRef } from "react";

const TourTitle = () => {
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  function handleSaveTitle() {
    if (inputRef.current) dispatch(saveTitle(inputRef.current["value"]));
  }

  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor="title">Tour name</label>
      <input
        onChange={handleSaveTitle}
        ref={inputRef}
        className="input"
        type="text"
        name="title"
        id="title"
        placeholder="Something creative..."
      />
    </div>
  );
};

export default TourTitle;
