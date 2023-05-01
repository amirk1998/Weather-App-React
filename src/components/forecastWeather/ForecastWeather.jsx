import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const ForecastWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div className='w-full px-5 '>
      <label className='text-2xl font-bold'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='bg-neutral-100 rounded-2xl h-10 m-1 flex items-center cursor-pointer text-sm py-[5px] px-5 w-full'>
                    <img
                      src={`/icons/${item.weather[0].icon}.png`}
                      alt={item.weather[0].main}
                      className='w-10'
                    />
                    <label className='text-neutral-800 flex-1 font-semibold ml-4'>
                      {forecastDays[index]}
                    </label>
                    <label className='flex-1 mr-4 text-right'>
                      {item.weather[0].description}
                    </label>
                    <label className='text-neutral-500'>
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='grid gap-x-8 gap-y-2 flex-1 py-1 px-8 grid-cols-2 grid-flow-row'>
                  {/* Item #1 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Pressure</label>
                    <label className='text-neutral-800'>
                      {Math.round(item.main.pressure)} hPa
                    </label>
                  </div>
                  {/* Item #2 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Humidity</label>
                    <label className='text-neutral-800'>
                      {Math.round(item.main.humidity)} %
                    </label>
                  </div>
                  {/* Item #3 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Clouds</label>
                    <label className='text-neutral-800'>
                      {item.clouds.all} %
                    </label>
                  </div>
                  {/* Item #4 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Wind Speed</label>
                    <label className='text-neutral-800'>
                      {Math.round(item.wind.speed)} m/s
                    </label>
                  </div>
                  {/* Item #5 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Sea level</label>
                    <label className='text-neutral-800'>
                      {Math.round(item.main.sea_level)} m
                    </label>
                  </div>
                  {/* Item #6 */}
                  <div className='flex items-center h-8 justify-between'>
                    <label className='text-neutral-500'>Feels like</label>
                    <label className='text-neutral-800'>
                      {Math.round(item.main.feels_like)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ForecastWeather;
