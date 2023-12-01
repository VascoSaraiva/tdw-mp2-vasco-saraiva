"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import TourTags from "@/components/create/TourTags";
import TourTitle from "@/components/create/TourTitle";
import TourDescription from "@/components/create/TourDescription";
import TourPublish from "@/components/create/TourPublish";
import TourPlaces from "@/components/create/TourPlaces";

const Page = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col gap-6">
        <div className="bg-white p-6 flex flex-col gap-4 rounded-md shadow-sm">
          <TourTitle />
          <TourDescription />
          <TourTags />
        </div>

        <TourPlaces />
        <TourPublish />
      </div>
    </Provider>
  );
};

export default Page;
