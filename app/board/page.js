// app/board/page.js
export default function BoardPage() {
    return (
      <div className="min-h-screen bg-pink-50 p-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Board Title</h1>
          <div className="space-x-4">
            {/* ex */}
            <button className="rounded bg-gray-200 px-2 py-1">Filter</button>
            <button className="rounded bg-gray-200 px-2 py-1">Search</button>
            <button className="rounded bg-gray-200 px-2 py-1">Settings</button>
          </div>
        </header>
  
        <div className="flex gap-4">
          {/* TO DO column */}
          <div className="flex-1 bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-3">TO DO</h2>
            <div className="space-y-2">
              <div className="rounded border border-gray-200 p-2">
                <p className="font-medium">Task 1</p>
                <p className="text-sm text-gray-500">YS-21</p>
              </div>
              <div className="rounded border border-gray-200 p-2">
                <p className="font-medium">Task 2</p>
                <p className="text-sm text-gray-500">YS-22</p>
              </div>
              {/* btn */}
              <button className="mt-2 w-full rounded bg-gray-100 py-1 text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>
          </div>
  
          {/* IN PROGRESS column */}
          <div className="flex-1 bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-3">IN PROGRESS</h2>
            <div className="space-y-2">
              {/* ...ex */}
            </div>
          </div>
  
          {/* DONE column */}
          <div className="flex-1 bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-3">DONE</h2>
            <div className="space-y-2">
              {/* ...ex */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  