import "./CardFooter.scss";

interface CardFooterProps {
  content?: string;
}

export const CardFooter = ({ content = "No footer content provided" }: CardFooterProps) => {
  return (
    <div className="card-footer">
      <p>{content}</p>
    </div>
  );
};
