
export default function Progress({progress, } : { progress : number | undefined}) {



  if(progress == 25)
  {
  return (
    <div>
      <div className="w-full flex items-center gap-x-1">
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
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
    </div>
  );
  }else if(progress == 50) {
    return (
      <div>
      <div className="w-full flex items-center gap-x-1">
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div>
          <div className="w-10 text-end">
            <span className="text-sm text-blue-500">50%</span>
          </div>
        </div>
      </div>
    </div>
    )
  }else if(progress == 75) {
    return (
      <div>
      <div className="w-full flex items-center gap-x-1">
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-100 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500/30"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div>
          <div className="w-10 text-end">
            <span className="text-sm text-blue-500">75%</span>
          </div>
        </div>
      </div>
    </div>
    )
  }else if(progress == 100) {
    return (
      <div>
      <div className="w-full flex items-center gap-x-1">
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="rounded-lg w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div>
          <div className="w-10 text-end">
            <span className="text-sm text-blue-500">100%</span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
