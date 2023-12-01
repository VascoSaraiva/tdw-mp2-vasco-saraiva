import { useAppSelector } from '@/redux/hooks'
import React from 'react'

const TourPublish = () => {

    const addedPlaces = useAppSelector(state => state.places.list)

    const post = {
        author: 'User name',
        authorPhoto: '/user.jpg',
        title: useAppSelector(state => state.details.title),
        desc: useAppSelector(state => state.details.description),
        tags: useAppSelector(state => state.tags),
        places: addedPlaces
    }

    let isAllOk = false

    if (post.title && post.desc && post.tags.length > 0 && post.places.length > 0) {
        if (post.tags[0].tagName) {
            isAllOk = !isAllOk
        }
    }

    function handlePublishTour() {
        alert('PUBLISHED')
    }

    return (
        <button
            className={`publishButton ${!isAllOk && 'opacity-50 hover:cursor-not-allowed'}`}
            disabled={!isAllOk && true}
            onClick={handlePublishTour}
        >
            Save and publish
        </button>

    )
}

export default TourPublish