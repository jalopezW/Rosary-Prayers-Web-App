export default function UserInput({ onFetchData }) {
    return (
      <button type="submit" className="button" onClick={onFetchData}>
        Click for Today's Prayers
      </button>
    );
  }
  