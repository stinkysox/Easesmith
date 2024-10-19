import React from "react";
import "./Search.css";
import { IoMdSearch } from "react-icons/io";
import { PiPottedPlantLight } from "react-icons/pi";

const images = [
  {
    imageUrl:
      "https://i.postimg.cc/26QJGHxC/360-F-175632245-7p5-Ga8z-TYDgb0-SVZMj-Sc-LXSc-FBK3-Voh-S.jpg",
    text: "Beautiful indoor plant.",
  },
  {
    imageUrl: "https://i.postimg.cc/9XBKqnMp/plant-nursery-items.jpg",
    text: "Assorted nursery plants.",
  },
  {
    imageUrl:
      "https://i.postimg.cc/tCScBnFn/61m-UWh-Q3-H-L-AC-UF1000-1000-QL80.jpg",
    text: "Blooming flower collection.",
  },
  {
    imageUrl:
      "https://i.postimg.cc/6p8mg6hj/depositphotos-309365812-stock-photo-plant-nursery-in-coyoacan.jpg",
    text: "Outdoor plant nursery.",
  },
  {
    imageUrl:
      "https://i.postimg.cc/bwSmLCz4/nurserylive-bush-allamanda-allamanda-cathartica-yellow-plant-1-9a935bc6-a643-44ee-8ba6-11292f93e460.jpg",
    text: "Allamanda Yellow Plant.",
  },
  {
    imageUrl: "https://i.postimg.cc/5NT3HBwg/images.jpg",
    text: "Exotic succulents.",
  },

  {
    imageUrl:
      "https://i.postimg.cc/Jz8Qc12H/5e0d8befb2724e8134300085-1577946095662.jpg",
    text: "Exotic Green Bush.",
  },
];

const Search = () => {
  return (
    <div className="search-main-section">
      <div className="search-input-container">
        <IoMdSearch />
        <input type="text" placeholder="Search Plant" />
        <PiPottedPlantLight />
      </div>

      <div className="search-second-container">
        <button>Plants</button>
        <button>Pots</button>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>

      <div className="search-round-images-section">
        <h2>Nursery</h2>
        <div className="round-images-container">
          {images.map((item, index) => (
            <div key={index} className="image-card">
              <img src={item.imageUrl} alt={`Plant ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
