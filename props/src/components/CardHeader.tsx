interface CardHeaderProps {
  text?: string;
}

export const CardHeader = ({ text = "No title provided" }: CardHeaderProps) => {
  return (
    <div className="card-header">
      <h2>{text}</h2>
    </div>
  );
};
