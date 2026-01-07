import React from "react";

interface ListComponentProps {
  items: string[];
  title?: string;
}

const ListComponent: React.FC<ListComponentProps> = ({ items, title }) => (
  <div>
    {title && <h2>{title}</h2>}
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ListComponent;
