import React from "react";
import useObservable from "hooks/useObserble";
import { counter$ } from "store";

const Like: React.FC = () => {
  const [count, _] = useObservable(counter$);
  const click = () => {
    counter$.next(count + 1);
  };
  return <div onClick={click}>like {count}</div>;
};

export default Like;
