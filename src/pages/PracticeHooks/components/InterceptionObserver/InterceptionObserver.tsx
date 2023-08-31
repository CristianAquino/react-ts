import { InfiniteScroll } from "./InfiniteScroll";
import { InfiniteScrollButton } from "./InfiniteScrollButton";
import { Observer } from "./Observer";

export type InterceptionObserverProps = {};

const InterceptionObserver = ({}: InterceptionObserverProps) => {
  return (
    <div>
      <h1>InterceptionObserver</h1>
      {/* <Observer /> */}
      {/* <InfiniteScrollButton /> */}
      <InfiniteScroll />
    </div>
  );
};

export default InterceptionObserver;
