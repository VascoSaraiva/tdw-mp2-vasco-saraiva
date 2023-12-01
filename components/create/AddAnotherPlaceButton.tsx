import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PlaceForm from './PlaceForm';

const AddAnotherPlaceButton = () => {

    let [addedNewSlot, setAddNewSlot] = useState(false)

    return (
        <>
        {
            !addedNewSlot ?
                (
                    <button onClick={() => setAddNewSlot(!addedNewSlot)} className='px-4 py-3 bg-white rounded-md w-full flex justify-between items-center shadow-sm' >
                        Add another place
                        <AddIcon />
                    </button >
                ) :

                (
                    <PlaceForm />
                )
        }
        </>
    )

}

export default AddAnotherPlaceButton