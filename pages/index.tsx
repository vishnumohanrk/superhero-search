import AppForm from '../components/AppForm';
import Card from '../components/Card';
import { ICharacter } from '../utils/types';

const antMan: ICharacter = {
  alignment: 'good',
  birthPlace: 'Coral Gables, Florida',
  firstApp: 'First Appearance: Avengers Vol 1 #181 (March, 1979)',
  groups: [
    'Ant-Man Security Solutions; formerly Future Foundation (leader)',
    'Fantastic Four (leader)',
    'Defenders',
    'Avengers',
    'Heroes For Hire',
    'Stark Industries',
  ],
  imgSrc: 'https://www.superherodb.com/pictures2/portraits/10/100/166.jpg',
  name: 'Scott Lang',
  occupation: 'Electronics Technician,',
  powerStats: [
    { label: 'Intelligence', powerPercent: 50 },
    { label: 'Speed', powerPercent: 61 },
    { label: 'Strength', powerPercent: 24 },
    { label: 'Durability', powerPercent: 18 },
    { label: 'Power', powerPercent: 45 },
    { label: 'Combat', powerPercent: 50 },
  ],
  publisher: 'Marvel Comics',
  superName: 'Ant Man',
};

const AppHome = () => {
  const handleSubmit = (query: string) => console.log(query);

  return (
    <>
      <AppForm shouldDisable={false} onSubmit={handleSubmit} />
      <p className="text-center mt-4">Search To See</p>
      <div className="grid max-w-5xl mx-auto gap-8 grid-cols-3 my-4">
        <Card {...antMan} />
        <Card {...antMan} />
        <Card {...antMan} />
        <Card {...antMan} />
        <Card {...antMan} />
        <Card {...antMan} />
      </div>
    </>
  );
};

export default AppHome;
