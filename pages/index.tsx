import { useState } from 'react';

import AppForm from '../components/AppForm';
import CardContainer from '../components/CardContainer';
import { ICharacter } from '../utils/types';

const AppHome = () => {
  const [data, setData] = useState<ICharacter[] | null>(null);
  const [txt, setTxt] = useState('Search To See');

  const handleSubmit = async (query: string) => {
    if (txt.toLowerCase().includes(query.toLowerCase())) {
      return;
    }

    setTxt('LOADING...');
    setData(null);

    const resp = await fetch(`/api/data?q=${query}`);

    if (resp.ok) {
      const f = await resp.json();
      setData(f);
      setTxt(`Search results for ${query}. Hover Over the cards.`);
      return;
    }

    setTxt('An Error Occurred');
    setData(null);
  };

  return (
    <>
      <AppForm shouldDisable={false} onSubmit={handleSubmit} />
      <p className="text-center mt-4">{txt}</p>
      {data ? <CardContainer dataList={data} /> : null}
    </>
  );
};

export default AppHome;
