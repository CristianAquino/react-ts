import React from "react";

export type ComponentTestProps = {
  name: string;
};

const ComponentTest: React.FC<ComponentTestProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default ComponentTest;
