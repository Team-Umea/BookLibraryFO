import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      <main className="grow flex flex-col items-center justify-center w-full">
        <>{children}</>
      </main>
      <Footer />
    </div>
  );
}
