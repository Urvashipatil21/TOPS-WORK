import TrendingSong from "./TrendingSong";
import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";
import MiniProfile from "./MiniProfile";
import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

import HeartLike from"./HeartLike";
import ProductQuantity from "./ProductQuantity";
import MusicVote from"./MusicVote";
import StarRating from "./StarRating";
import LikeCounter from "./LikeCounter";
import ProductSearch from "./ProductSearch";
import MusicPlaylist from "./MusicPlaylist";
import UserLogin from "./UserLogin";
import UserLoginClear from "./UserLoginClear";
import TrendingSong2 from "./TrendingSong2";
import IPLSCORE from "./IPLSCORE";
import MovieSuggestion from "./MovieSuggestion";
import AutoData from "./AutoData";
function App() {
  return (
    <div>

      <h1>Welcome to My React Zomato App</h1>

      <TrendingSong />

      <h1>Welcome to React JSX!</h1>

      <UserGreeting username="Urvashi" />

      <UserGreetingClass username="Urvashi" />

      <MiniProfile />

      <h2>Product Cards</h2>

      <ProductCard productName="Laptop" price={50000} />

      <ProductCard productName="Mobile" price={20000} />

      <h2>User Profiles</h2>

      <UserProfile
        username="Urvashi"
        followers={1500}
        profilePic="https://i.pravatar.cc/100"
      />

      <UserProfile username="Guest User" />


      {/* New useState Components */}

      <HeartLike />

      <ProductQuantity />

      <MusicVote />

      <StarRating />

      <LikeCounter/>

      <ProductSearch/>

      <MusicPlaylist/>

      <UserLogin/>

      <UserLoginClear/>
      <IPLSCORE/>
      <AutoData/>1
     
    
<TrendingSong2 />
<MovieSuggestion />

      

      


    </div>
  );
}

export default App;