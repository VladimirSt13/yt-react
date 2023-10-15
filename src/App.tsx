import { useState } from "react";

import { categories, videos } from "./data/home";

import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";

import { CategoryPills } from "./components/CategoryPills";
import { VideoGridItem } from "./components/VideoGridItem";
import { SidebarProvider } from "./context/SidebarContext";

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />

        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />

          <div className="overflow-x-hidden px-8 pb-4">
            <div className="stiky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
