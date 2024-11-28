import "./styles.css";
import { useState } from "react";
import Title from "./Title";
import Response from "./RosaryResponse";
import Footer from "./Footer";
import Image from "./Image";
import UserInput from "./Input";

export default function App() {
  const [audioSrc, setAudioSrc] = useState("");
  const [rosaryDay, setRosaryDay] = useState("");
  const [mystery, setMystery] = useState("");
  const [season, setSeason] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://the-rosary-api.vercel.app/v1/today"
      );
      const data = await response.json();
      console.log("API Data:", data);

      if (data.length > 0) {
        setAudioSrc(`https://dailyrosary.cf/${data[0].mp3Link}`);
        setRosaryDay(data[0].rosary_day);
        setMystery(data[0].mystery);
        setSeason(data[0].season);
        setCurrentDate(data[0].currentDate);
        setIsButtonVisible(false);
      } else {
        console.error("No data from API.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <Title givenTitle="Rosary Prayers" />

      {isButtonVisible && <UserInput onFetchData={fetchData} />}
      <Response
        audioSrc={audioSrc}
        rosaryDay={rosaryDay}
        mystery={mystery}
        season={season}
        currentDate={currentDate}
      />
      <div className="Images">
        <Image
          src="https://mariansisters.com/uploads/2/7/8/8/27885129/mary-and-the-rosary_orig.jpg"
          alt="Mary holding a rosary"
        />
        <Image
          src="https://www.stjosephsentul.org/wp-content/uploads/2016/09/Our-Lady-of-the-Holy-Rosary-fp.jpg"
          alt="Mary holding Jesus and a rosary"
        />
      </div>
      <Footer />
    </div>
  );
}
