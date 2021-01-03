const AppFooter = () => (
  <footer className="text-sm flex justify-center mt-4">
    <a
      className="flex font-medium items-center underline hover:text-blue-600 hover:no-underline"
      href="https://superheroapi.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      SuperHero API
      <span>
        <svg
          className="w-4 h-4 ml-0.5 mb-0.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  </footer>
);

export default AppFooter;
