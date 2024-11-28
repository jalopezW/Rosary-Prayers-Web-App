export default function Response({
    audioSrc,
    rosaryDay,
    mystery,
    season,
    currentDate,
  }) {
    return (
      <div>
        {audioSrc ? (
          <audio controls>
            <source src={audioSrc} type="audio/mpeg" />
            No audio element.
          </audio>
        ) : (
          <p>Audio will appear here.</p>
        )}
        <div>
          <p>
            <strong>Rosary Day:</strong>{" "}
            {rosaryDay || "Rosary Day Will Appear Here"}
          </p>
          <p>
            <strong>Mystery:</strong> {mystery || "Mystery Will Appear Here"}
          </p>
          <p>
            <strong>Season:</strong> {season || "Season Will Appear Here"}
          </p>
          <p>
            <strong>Current Date:</strong>{" "}
            {currentDate || "Current Day Will Appear Here"}
          </p>
        </div>
      </div>
    );
  }
  