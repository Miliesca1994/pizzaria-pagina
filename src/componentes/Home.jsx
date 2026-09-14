import Header from "./Header";
import CardPizza from "./CardPizza";

import napolitana from "../assets/pizza napolitana.png";
import espanola from "../assets/pizza espanola.png";
import pepperoni from "../assets/pizza pepperoni.png";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row">

          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={[
              "mozzarella",
              "tomates",
              "jamón",
              "orégano"
            ]}
            img={napolitana}
          />

          <CardPizza
            name="Española"
            price={6950}
            ingredients={[
              "mozzarella",
              "gorgonzola",
              "parmesano",
              "provolone"
            ]}
            img={espanola}
          />

          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={[
              "mozzarella",
              "pepperoni",
              "orégano"
            ]}
            img={pepperoni}
          />

        </div>
      </div>
    </>
  );
};

export default Home;