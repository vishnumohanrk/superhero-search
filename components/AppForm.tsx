import { useState } from 'react';

interface AppFormProps {
  onSubmit: (val: string) => void;
  shouldDisable: boolean;
}

const AppForm = ({ onSubmit, shouldDisable }: AppFormProps) => {
  const [value, setValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onSubmit(value);
    }
    setValue('');
  };

  return (
    <form className="flex flex-col items-center mt-4" onSubmit={handleSubmit}>
      <input
        aria-label="search"
        type="search"
        placeholder="Search"
        className={`max-w-xs w-full rounded-md ${shouldDisable ? 'cursor-not-allowed' : ''}`}
        value={value}
        onChange={handleInput}
        disabled={shouldDisable}
      />
      <button
        disabled={shouldDisable}
        className={`select-none text-white font-medium rounded-md transition-colors mt-3 px-5 py-2 bg-blue-600 ${
          shouldDisable
            ? 'opacity-80 cursor-not-allowed'
            : 'hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-white focus:ring-offset-2'
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default AppForm;
