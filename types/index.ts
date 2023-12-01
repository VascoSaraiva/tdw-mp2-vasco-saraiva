import { SetStateAction } from "react";

export interface Sessionn {
  expires: string;
  user: {
    email: string;
    image: string;
    name: string;
  };
}

export interface MenuProps {
  icon: any;
  content: React.ReactNode;
}

export interface ItemContentProps {
  typeOfItem: string;
  session?: any;
}

export interface SignInButtonProps {
  providerId: string;
}

interface Tag {
  tagId: string;
  tagName: string;
}

interface Place {
  place_id: string;
  name: string;
  editorial_summary: string;
  user_ratings_total: number;
  rating: number;
  photo: string;
  url: string;
}

export interface MockDataItem {
  id: string;
  author: string;
  authorPhoto: string;
  title: string;
  desc: string;
  tags: Tag[];
  places: Place[];
}

export interface PlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  url: string;
  user_ratings_total: number;
  photo: string;
  editorial_summary: string;
}

export interface PostProps {
  data: MockDataItem;
}

export interface PlaceTextSearchResult {
  name: string;
  place_id: string;
}

export interface FormProps {
  numberOfPlaces: number;
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
}
