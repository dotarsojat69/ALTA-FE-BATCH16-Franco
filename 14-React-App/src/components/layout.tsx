import { ReactNode } from "react";
import clsx from "clsx";

import { Toaster } from "./ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen bg-white font-roboto flex flex-col overflow-auto">
      <Navbar />
      <div className="container grow mx-auto py-4 px-8 flex flex-col">
        {children}
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
