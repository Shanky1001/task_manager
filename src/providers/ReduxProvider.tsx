import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { ReactNode } from "react";

function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}

export default ReduxProvider;
