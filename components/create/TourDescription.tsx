import { saveDescription } from '@/redux/slices/tourDetails'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const TourDescription = () => {

  const txtAreaRef = useRef(null)
  const dispatch = useDispatch()

  function handleSaveDescription() {
    if (txtAreaRef.current)
      dispatch(saveDescription(txtAreaRef.current['value']))
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
  )
}

export default TourDescription