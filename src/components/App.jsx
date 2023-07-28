import Sidebar from "./Sidebar";
import Experiences from "./Experiences";

const App = () => {
  return (
    <div class="w-[210mm] h-[297mm] bg-theme-1 text-theme-3 mx-auto flex">
      <Sidebar class="pt-12 px-6" />
      <Experiences class="flex-1 pt-12 px-8" />
    </div>
  );
};

export default App;
