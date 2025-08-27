
export default function Progress() {
  return (
    <div>
      <div className="w-full flex items-center gap-x-1">
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div>
          <div className="w-10 text-end">
            <span className="text-sm text-blue-500">25%</span>
          </div>
        </div>
      </div>

      {/* <div className="w-full flex items-center gap-x-1">
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div>
          <div className="w-10 text-end">
            <span className="text-sm text-red-500">25%</span>
          </div>
        </div>
      </div> */}


    </div>
  );
}
