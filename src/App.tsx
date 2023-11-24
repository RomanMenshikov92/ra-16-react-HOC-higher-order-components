import "./App.css";
import { Time } from "./components/Time/";
import { Highlight } from "./components/Highlight/";
import { Aggregation } from "./components/Aggregation";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Форматирование даты публикации</h2>
        <Time></Time>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Популярное и новое</h2>
        <Highlight></Highlight>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Агрегация данных</h2>
        <Aggregation></Aggregation>
      </div>
    </>
  );
}

export default App;
