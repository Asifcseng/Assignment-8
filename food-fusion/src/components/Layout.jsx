import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="pt-20 pl-10 w-full bg-orange-50">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
