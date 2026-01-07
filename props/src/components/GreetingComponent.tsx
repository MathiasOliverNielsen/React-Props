import React from "react";
import "./GreetingComponent.scss";

interface GreetingProps {
  name: string;
}

export const GreetingComponent = (props: GreetingProps) => {
  return <p className="greeting">Hej, {props.name}!</p>;
};
