import { useAppDispatch } from "@/redux/hooks";
import { saveDescription } from "@/redux/slices/tourDetails";
import React, { useRef } from "react";

const TourDescription = () => {
  const txtAreaRef = useRef(null);
  const dispatch = useAppDispatch();

  function handleSaveDescription() {
    if (txtAreaRef.current)
      dispatch(saveDescription(txtAreaRef.current["value"]));
  }

  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor="tourDesc">Tour Description</label>
      <textarea
        onChange={handleSaveDescription}
        ref={txtAreaRef}
        rows={5}
        className="input"
        name="tourDesc"
        id="tourDesc"
        placeholder="What is it about?"
      />
    </div>
  );
};

export default TourDescription;
