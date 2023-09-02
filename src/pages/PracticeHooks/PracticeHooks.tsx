import { DeferedHook, InterceptionObserver, ReactTweet } from "./components";

export type PracticeHooksProps = {};

const PracticeHooks = ({}: PracticeHooksProps) => {
  return (
    <div>
      {/* <DeferedHook /> */}
      {/* <InterceptionObserver /> */}
      <ReactTweet url="https://twitter.com/realmadriden/status/1530664561078067200" />
    </div>
  );
};

export default PracticeHooks;
