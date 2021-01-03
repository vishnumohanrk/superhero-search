import { ICharacter } from '../utils/types';
import Card from './Card';

interface CardContainerProps {
  dataList: ICharacter[];
}

const CardContainer = ({ dataList }: CardContainerProps) => (
  <div
    className={`grid items-stretch my-4 max-w-xs sm:max-w-2xl mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl`}
  >
    {dataList.map(i => (
      <Card {...i} key={i.id} />
    ))}
  </div>
);

export default CardContainer;
