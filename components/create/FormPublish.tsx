import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetPlaces } from "@/redux/slices/placesSlice";
import { errorOcurred, isLoading, isSuccessful, resetSubmission } from "@/redux/slices/postSubmissionSlice";
import { resetTags } from "@/redux/slices/tagsSlice";
import { resetDetails } from "@/redux/slices/tourDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormPublish = () => {

  const { data: session } = useSession();

  const addedPlaces = useAppSelector(state => state.places.list);
  const submissionState = useAppSelector(state => state.submission.value)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const post = {
    author: session?.user?.name,
    authorPhoto: session?.user?.image,
    title: useAppSelector((state) => state.details.title),
    desc: useAppSelector((state) => state.details.description),
    tags: useAppSelector((state) => state.tags.list),
    places: addedPlaces,
  };

  let isAllOk = false;

  if (
    post.title &&
    post.desc &&
    post.tags.length > 0 &&
    post.places.length > 0
  ) {
    if (post.tags[0].tagName) {
      isAllOk = !isAllOk;
    }
  }

  async function handlePublishTour() {
    if (isAllOk) {
      dispatch(isLoading())

      const tagsString = JSON.stringify(post.tags)
      const encodedTags = encodeURIComponent(tagsString)

      const placesString = JSON.stringify(post.places)
      const encodedPlaces = encodeURIComponent(placesString)

      const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTION_URL}/api/save-post?author=${post.author}&authorPhoto=${post.authorPhoto}&title=${post.title}&desc=${post.desc}&tags=${encodedTags}&places=${encodedPlaces}`)
      const status = await response.status
      if (status === 200) {
        dispatch(isSuccessful())
        setTimeout(() => {
          setTimeout(() => {
            dispatch(resetDetails())
            dispatch(resetTags())
            dispatch(resetPlaces())
            dispatch(resetSubmission())
            router.push('/')
          }, 1000)
        }, 500
        )
      } else {
        dispatch(errorOcurred())
      }

    }
  }

  return (
    <button
      className={`publishButton ${!isAllOk && "opacity-50 hover:cursor-not-allowed"
        }`}
      disabled={!isAllOk && submissionState != 'idle' && true}
      onClick={handlePublishTour}
    >
      {
        submissionState === 'idle' ? 'Save and publish' :
          submissionState === 'loading' ? 'Loading...' :
            submissionState === 'success' ? 'Post submitted! 🎉' :
              submissionState === 'error' && 'Something happened 😥'
      }

    </button>
  );
};

export default FormPublish;
