import AppForm from '../components/AppForm';

const AppHome = () => {
  const handleSubmit = (query: string) => console.log(query);

  return (
    <>
      <AppForm shouldDisable={false} onSubmit={handleSubmit} />
      <p className="text-center mt-4">Search To See</p>
    </>
  );
};

export default AppHome;
