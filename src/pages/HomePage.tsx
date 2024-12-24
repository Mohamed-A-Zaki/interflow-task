import AddBranchButton from "@/components/AddBranchButton";
import BranchesList from "@/components/BranchesList";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <>
      <div className="flex">
        <Sidebar className="hidden xl:block" />
        <div className="container">
          <Navbar />
          <main>
            <BreadcrumbSection />
            <AddBranchButton />
            <BranchesList />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
