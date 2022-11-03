import { useState } from "react";
import "./App.css";
import { FilterProdact } from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import ProductList from "./Components/ProductList";
import { products } from "./data";

function App() {
  const [panier, setPanier] = useState([]);
  const [list, setList] = useState(products);
  const [total, setTotal] = useState(0);
  const handelAdd = (newproduct) => {
    const existProd = panier.find((el) => el.id == newproduct.id);
    if (!existProd) {
      setPanier([{ ...newproduct, qteA: 1, pT: newproduct.price }, ...panier]);
      setTotal(total + newproduct.price);
    } else {
      alert("le produit est deja ajoute");
    }
  };
  const increament = (elm) => {
    if(elm.QtS > elm.qteA){
       setPanier(
          panier.map((el) =>
            el.id == elm.id
              ? {
                  ...el,
                  qteA: el.qteA + 1,
                
                  pT: el.pT + el.price,
                }
              : el
          )
        )
        setTotal(total+elm.price)
              }else alert("fin du stock");
  };

  return (
    <div className="App">
      <FilterProdact />
      <ProductList list={list} handelAdd={handelAdd} />
      <Panier panier={panier} total={total} increament={increament} />
    </div>
  );
}

export default App;
