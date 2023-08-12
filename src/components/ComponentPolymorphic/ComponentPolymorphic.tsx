import React from "react";

export type ComponentPolymorphicProps<T extends React.ElementType> = {
  variant: "black" | "white" | "red";
  children: React.ReactNode;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const ComponentPolymorphic = <T extends React.ElementType>({
  variant,
  children,
  as,
  ...res
}: ComponentPolymorphicProps<T>) => {
  const Component = as || "div";
  return (
    <Component style={{ background: variant }} {...res}>
      {children}
    </Component>
  );
};

export default ComponentPolymorphic;
