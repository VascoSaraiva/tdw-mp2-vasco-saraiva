import React from 'react'
import TourDescription from './TourDescription'
import TourTags from './TourTags'
import TourTitle from './TourTitle'
import { useAppSelector } from '@/redux/hooks'

const FormFirstSection = () => {

  const submissionState = useAppSelector(state => state.submission.value)

  return (
    <div className={`bg-white p-6 flex flex-col gap-4 rounded-md shadow-sm ${submissionState != 'idle' && 'pointer-events-none opacity-40'}`}>
      <TourTitle />
      <TourDescription />
      <TourTags />
    </div>
  )
}

export default FormFirstSection