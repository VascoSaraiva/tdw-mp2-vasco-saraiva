const getPlaceDetails = async(id : string) => {

    try {
      
      const url = new URL(
        "https://maps.googleapis.com/maps/api/place/details/json",
      );
  
      url.searchParams.append(
        "fields",
        "place_id,name,editorial_summary,user_ratings_total,rating,photos,url",
      );
      url.searchParams.append("place_id", id);
      url.searchParams.append(
        "key",
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
      );
  
      const response = await fetch(`${url}`);
  
      const data = await response.json();
  
      const handlePhotoUrl = () => {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${data.result.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
      };
  
      const handleEditorialSummary = () => {
        return data.result.editorial_summary.overview;
      };
  
      let photoURL;
      if (data.result.photos) {
        photoURL = handlePhotoUrl();
      } else {
        photoURL = "/default_place_image.png";
      }
  
      let summary;
      if (data.result.editorial_summary) {
        summary = handleEditorialSummary();
      } else {
        summary = "";
      }
  
      let placeDetails = {
        place_id: data.result.place_id,
        name: data.result.name,
        rating: data.result.rating,
        url: data.result.url,
        user_ratings_total: data.result.user_ratings_total,
        photo: photoURL,
        editorial_summary: summary,
      };
  
      return placeDetails
  
    } catch (error) {
      console.log(error)
    }
    
  }


export default getPlaceDetails