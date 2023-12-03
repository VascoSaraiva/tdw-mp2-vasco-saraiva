import { StarsRatingProps } from "@/types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarsRating = ({ rating, totalReviews }: StarsRatingProps) => {
  let reviewStars = [];

  if (rating) {
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        reviewStars.push(<StarIcon className="text-yellow-400" key={i} fontSize="small" />);
      } else {
        reviewStars.push(<StarBorderIcon className="text-yellow-400" key={i} fontSize="small" />);
      }
    }
  }


  return <div className="text-sm flex items-center gap-1">

    {reviewStars.length > 0 && <div>
      {reviewStars}
    </div>}


    <div className="translate-y-[1.4px]">
      {totalReviews ? totalReviews + ' reviews' : 'No reviews'}
    </div>

  </div>;
};

export default StarsRating;
