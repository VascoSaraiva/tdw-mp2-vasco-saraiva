import { StarsRatingProps } from "@/types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarsRating = ({ rating }: StarsRatingProps) => {
  let reviewStars = [];

  if(rating){
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        reviewStars.push(<StarIcon className="text-yellow-400" key={i} fontSize="small" />);
      } else {
        reviewStars.push(<StarBorderIcon className="text-yellow-400" key={i} fontSize="small" />);
      }
    }
  }else{
    reviewStars.push(<p className="text-sm">No</p>)
  }
  

  return <>{reviewStars}</>;
};

export default StarsRating;
