import { StarsRatingProps } from "@/types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarsRating = ({ rating }: StarsRatingProps) => {
  let reviewStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      reviewStars.push(<StarIcon key={i} fontSize="small" />);
    } else {
      reviewStars.push(<StarBorderIcon key={i} fontSize="small" />);
    }
  }

  return <>{reviewStars}</>;
};

export default StarsRating;
