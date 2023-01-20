"use client";

import { Provider as P } from "react-redux";
import { store } from "../state/store";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <P store={store}>{children}</P>;
};

export default Provider;
