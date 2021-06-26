import React from "react";
import "./Top10.css";
import CardTop10 from './components/CardTop10'
const Top10 = () => {
  var items = [
    {
      id: 1,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 2,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 3,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 4,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 5,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 7,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 8,
      image: "https://i.ytimg.com/vi/j1Y5FNKwzNo/maxresdefault.jpg",
    },
    {
      id: 9,
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2020/07/01150506/breaking-bad1.jpg",
    },
    {
      id: 10,
      image:
        "http://tvcinemaemusica.files.wordpress.com/2011/07/snowwhite_lillycollins.jpg",
    },
  ];
  return (
    <div className="top10">
        <h1>Top 10</h1>
     <div className="groupCards">
     {items.map((e, i) => {
        return <CardTop10 data={e}/>
      })}
     </div>
    </div>
  );
};
export default Top10;
