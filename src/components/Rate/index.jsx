import { Container } from "./style";
import filledStar from "../../assets/filled-star.svg";
import emptyStar from "../../assets/empty-star.svg";

export function Rate({ rate }) {
  const stars = [];
  const fullStars = Math.floor(rate); //fulfilled stars
//   const decimalPart = rate - fullStars; //incomplete stars

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img src={filledStar} alt="filled star" />);
  }

  const remainingStars = 5 - fullStars; //incomplete star is already counted

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<img src={emptyStar} alt="empty star" />);
  }

//   if (decimalPart >= 0.25) {
//     const starStyle = {
//       backgroundImage: `linear-gradient(to right, #FF859B ${decimalPart * 100}%, transparent 0%)`,
//     };
//     stars.push(
//       <div className="star" style={starStyle}>
//         <img src={emptyStar} alt="incomplete star" />
//       </div>
//     );
//   } else {
//     stars.push(<img src={emptyStar} alt="empty star" />);
//   }

  return <Container>{stars}</Container>;
}