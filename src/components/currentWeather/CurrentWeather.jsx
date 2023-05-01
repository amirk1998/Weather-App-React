const CurrentWeather = () => {
  return (
    <div className='mt-5 mb-0 w-[300px] rounded-md shadow-custom text-white bg-zinc-700 pt-0 pb-5 px-5 '>
      <div className='flex items-center justify-between'>
        <div>
          <p className='font-semibold text-lg leading-none m-0 tracking-[1px] '>
            City Name
          </p>
          <p className='font-normal text-sm leading-none m-0 '>Sunny</p>
        </div>
        <img className='w-24' src='/icons/01d.png' alt='weather-icon' />
      </div>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-7xl w-auto tracking-[-5px] my-2 mx-0'>
          18°C
        </p>
        <div className='w-full pl-5'>
          {/* Row #1 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs '>Details</span>
          </div>
          {/* Row #2 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Feels like</span>
            <span className='text-right font-semibold text-xs'>22°C </span>
          </div>
          {/* Row #3 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>wind</span>
            <span className='text-right font-semibold text-xs'>2 m/s</span>
          </div>
          {/* Row #4 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Humidity</span>
            <span className='text-right font-semibold text-xs'>15%</span>
          </div>
          {/* Row #5 */}
          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Pressure</span>
            <span className='text-right font-semibold text-xs'>20 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
