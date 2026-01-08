import { CardHeader } from "../CardHeader/CardHeader";
import { CardBody } from "../CardBody/CardBody";
import { CardFooter } from "../CardFooter/CardFooter";
import "./Card.scss";

interface CardData {
  title?: string;
  textContent?: string;
  footerContent?: string;
}

interface CardProps {
  cardData?: CardData;
}

export const Card = ({ cardData }: CardProps) => {
  return (
    <div className="card">
      <CardHeader text={cardData?.title} />
      <CardBody content={cardData?.textContent} />
      <CardFooter content={cardData?.footerContent} />
    </div>
  );
};
