

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
              <p className="text-3xl font-bold">$12,345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Active Users</h2>
              <p className="text-3xl font-bold">1,245</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
              <p className="text-3xl font-bold">985</p>
            </div>
          </div>

          <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Website Traffic</h2>
            {/* Placeholder for chart */}
            <div className="h-64 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
