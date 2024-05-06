import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen">
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0">
          <Sidebar />
        </div>
        {children}
      </div>
    );
  };
  
  export default DashboardLayout;
  