import { PlaceTextSearchResult } from "@/types";

const getSearchResults = async(query: string ) => {
    const url = new URL(
        "https://maps.googleapis.com/maps/api/place/textsearch/json",
      );
      url.searchParams.append("query", query);
      url.searchParams.append(
        "key",
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
      );
      const response = await fetch(`${url}`);
  
      const data = await response.json();
  
      let filteredData = data.results.slice(0, 7);
  
      filteredData = filteredData.map(
        ({ name, place_id }: PlaceTextSearchResult) => ({ name, place_id }),
      );

      return filteredData
}

export default getSearchResults