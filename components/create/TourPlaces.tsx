import React, { ReactElement, useEffect, useState } from 'react'
import Form from './Form'
import { useAppSelector } from '@/redux/hooks'
import { useDispatch } from 'react-redux'
import PlaceCard from './PlaceCard'
import AddIcon from '@mui/icons-material/Add';


const TourPlaces = () => {

    let savedPlaces = useAppSelector(state => state.places.list)
    let [placeCards, setPlaceCards] = useState<ReactElement[]>([])
    let [showForm, setShowForm] = useState<boolean>(false)


    useEffect(() => {

        setPlaceCards([])
        setShowForm(false)

        savedPlaces.map(id =>
            setPlaceCards(cards => [...cards, <PlaceCard key={id} id={id} />])
        )


    }, [savedPlaces])


    return (
        <>
            {placeCards}


            {savedPlaces.length === 0 || showForm ?
                <Form numberOfPlaces={savedPlaces.length} setShowForm={setShowForm} />

                : savedPlaces.length < 10 &&

                <button onClick={() => setShowForm(!showForm)} className='px-4 py-3 bg-white rounded-md w-full flex justify-between items-center shadow-sm' >
                    Add another place
                    <AddIcon />
                </button >
            }

        </>

    )
}

export default TourPlaces