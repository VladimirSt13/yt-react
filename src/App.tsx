import { CategoryPills } from "./components/CategoryPills";
import { PageHeader } from "./layouts/PageHeader";

export const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />

      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="">SideBar</div>

        <div className="stiky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} />

          <div className="">Content</div>
        </div>
      </div>
    </div>
  );
};
