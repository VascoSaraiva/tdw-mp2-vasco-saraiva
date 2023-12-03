import { SetStateAction } from "react";

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

export interface PlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  url: string;
  user_ratings_total: number;
  photo: string;
  editorial_summary: string;
}

export interface PostTypes{
  id : number;
  author: string;
  authorphoto: string;
  title: string;
  description: string;
  tags : Tag[];
  places: PlaceDetails[];
  placePhotoURL: string;
}

export interface PlaceTextSearchResult {
  name: string;
  place_id: string;
}

export interface StarsRatingProps {
  rating?: number;
  totalReviews?: number
}

export interface FormProps {
  numberOfPlaces: number;
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
}

export interface PostProps {
  data : PostTypes
}