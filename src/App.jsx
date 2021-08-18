import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
// notmalises style
import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <h1>WE HAVE BEGUN</h1>
      <Header />
      <List />
      <Map />
      <PlaceDetails />
    </div>
  );
};

export default App;
