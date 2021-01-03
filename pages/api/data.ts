import { NextApiHandler } from 'next';

import { ICharacter } from '../../utils/types';

const getData = async (query: string): Promise<ICharacter[]> => {
  const resp = await fetch(`https://superheroapi.com/api/${process.env.API_KEY}/search/${query}`);

  if (resp.ok) {
    const data = await resp.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.results as any[]).map(i => ({
      alignment: i.biography.alignment,
      birthPlace: i.biography['place-of-birth'],
      firstApp: i.biography['first-appearance'],
      publisher: i.biography.publisher,
      name: i.biography['full-name'],
      powerStats: Object.keys(i.powerstats).map(j => ({ label: j, powerPercent: Number(i.powerstats[j]) })),
      id: i.id,
      groups: i.connections['group-affiliation'],
      imgSrc: i.image.url,
      occupation: i.work.occupation,
      superName: i.name,
    }));
  }

  throw new Error();
};

const sendData: NextApiHandler<ICharacter[] | { error: 'NA' }> = async (req, res) => {
  try {
    const data = await getData(req.query.q as string);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'NA' });
  }
};

export default sendData;
