import React from "react";

interface HeadingProps {
  color?: string;
  text: string; // Specify the type of 'text' prop as string
}

export default function Heading({ color = "olive", text }: HeadingProps): JSX.Element {
  return <h1 style={{ color: color }}>{text}</h1>;
}
