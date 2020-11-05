import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

function useObservable<T>(state$: BehaviorSubject<T>): [T, (n: T) => void] {
  const [state, setState] = useState(state$.value);

  useEffect(() => {
    const subscription = state$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);

  return [state, setState];
}

export default useObservable;
