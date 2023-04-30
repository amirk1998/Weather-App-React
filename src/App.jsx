import Search from './components/search/Search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className='App w-full h-screen flex flex-col items-center bg-neutral-300 py-5'>
      <div className='w-1/4'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
