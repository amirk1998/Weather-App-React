const CurrentWeather = ({ data }) => {
  return (
    <div className='mt-5 mb-0 w-[350px] rounded-md shadow-custom text-white bg-zinc-700 pt-0 pb-5 px-5 '>
      <div className='flex items-center justify-between'>
        <div>
          <p className='font-semibold text-lg leading-none m-0 tracking-[1px] '>
            {data.city}
          </p>
          <p className='font-normal text-sm leading-none m-0 '>
            {data.weather[0].description}
          </p>
        </div>
        <img
          className='w-24'
          src={`/icons/${data.weather[0].icon}.png`}
          alt={data.weather[0].main}
        />
      </div>
      <div className='flex items-center justify-between gap-x-4'>
        <p className='font-semibold text-7xl w-auto tracking-[-5px] my-2 mx-0'>
          {Math.round(data.main.temp)}°C
        </p>
        <div className='w-full pl-5'>
          {/* Row #1 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs '>Details</span>
          </div>
          {/* Row #2 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Feels like</span>
            <span className='text-right font-semibold text-xs'>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          {/* Row #3 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>wind</span>
            <span className='text-right font-semibold text-xs'>
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          {/* Row #4 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Humidity</span>
            <span className='text-right font-semibold text-xs'>
              {Math.round(data.main.humidity)} %
            </span>
          </div>
          {/* Row #5 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Pressure</span>
            <span className='text-right font-semibold text-xs'>
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
