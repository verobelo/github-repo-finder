import Dropdown from "./Dropdown";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="search"
            value=""
            placeholder="Search repositories..."
          />
        </label>

        <button className="search-bar__button">
          <svg
            width={26}
            height={26}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#808080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="search-bar__filters">
        <Dropdown>
          <label htmlFor="language">
            <select id="language" name="language" defaultValue="option1">
              <option value="option1">Language</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
        </Dropdown>
        <Dropdown>
          <label htmlFor="sortby">
            <select id="sortby" name="sortby" defaultValue="option1">
              <option value="option1">Best Match</option>
              <option value="option2">Most Stars</option>
              <option value="option3">Most Forks</option>
            </select>
          </label>
        </Dropdown>

        <button className="search-bar__random-btn">Surprise Me!</button>
      </div>
    </div>
  );
}
