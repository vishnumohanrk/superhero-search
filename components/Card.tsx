import { ICharacter } from '../utils/types';
import LabelledText from './LabelledText';
import PowerBar from './PowerBar';

const Card = (props: ICharacter) => {
  const { imgSrc, superName, name, occupation, groups, firstApp, alignment, birthPlace, powerStats, publisher } = props;

  const borderBottomColor = alignment === 'bad' ? '#EF4444' : alignment === 'good' ? '#22C55E' : '#3B82F6';

  const cls = `flex flex-col justify-center items-center`;

  return (
    <div
      className="rounded-md group relative border-2 shadow-lg overflow-hidden"
      style={{ borderBottomColor, borderBottomWidth: '3px' }}
    >
      <div
        className={`${cls} relative z-10 transform transition-transform ease-in-out duration-200 group-hover:-translate-y-full bg-white`}
      >
        <div className="w-full mb-3 h-96">
          <img className="w-full h-full object-cover rounded-t-md" src={imgSrc} alt={superName} loading="lazy" />
        </div>
        <p className="text-xl font-semibold">{superName}</p>
        <p className="opacity-50 text-sm">{name}</p>
        <div className="flex flex-col mt-3 mb-8 px-2 space-y-2.5 text-sm">
          <LabelledText label="Occupation" textValue={occupation} />
          <LabelledText label="Groups" textValue={groups.join(', ')} />
          <LabelledText label="First Appearance" textValue={firstApp} />
        </div>
      </div>
      <div className={`${cls} space-y-4 text-sm w-full absolute top-0 px-5 py-8`}>
        <LabelledText label="Place of Birth" textValue={birthPlace} />
        {powerStats.map(i => (
          <PowerBar {...i} key={i.label} />
        ))}
        <LabelledText label="Alignment" textValue={alignment} />
        <LabelledText label="Publisher" textValue={publisher} />
      </div>
    </div>
  );
};

export default Card;
