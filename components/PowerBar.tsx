import { IPower } from '../utils/types';

const PowerBar = ({ label, powerPercent }: IPower) => (
  <div className="font-medium w-full">
    <div className="flex bg-gray-200 rounded-md overflow-hidden">
      {powerPercent !== null ? (
        <span
          className={`py-1 text-white text-right pr-1 ${powerPercent < 40 ? 'bg-red-500' : 'bg-green-500'}`}
          style={{ width: `${powerPercent}%` }}
        >
          {powerPercent}%
        </span>
      ) : (
        <span className="py-1 pl-2">NA</span>
      )}
    </div>
    <p className="text-center my-1">{label}</p>
  </div>
);

export default PowerBar;
