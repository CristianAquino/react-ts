import React from "react";

interface OriginalProps {
  name: string;
}

const HOC = () => {
  const name = "jhon";
  return (
    <div>
      <SideBar name={name} />
      <SubscribedSideBar name={name} isSubscribed={false} />
      <SubscribedHeader name={name} isSubscribed={false} />
    </div>
  );
};

const SideBar = ({ name }: OriginalProps) => {
  return <div>Hola, {name}</div>;
};

const Header = ({ name }: OriginalProps) => {
  const favs = [1, 2, 3, 4, 5];
  return (
    <div>
      Tus favoritos, {name}
      {favs.map((fav) => (
        <div>{fav}</div>
      ))}
    </div>
  );
};

// HOC
interface ExtendProps extends OriginalProps {
  isSubscribed: boolean;
}

const whitSubscribe = (Component: React.ComponentType<OriginalProps>) => {
  const WithSubscribe = (props: ExtendProps) => {
    const { isSubscribed } = props;

    if (!isSubscribed) return <div>Por favor suscribase</div>;
    return <Component {...props} />;
  };
  return WithSubscribe;
};

const SubscribedSideBar = whitSubscribe(SideBar);
const SubscribedHeader = whitSubscribe(Header);
export default HOC;
