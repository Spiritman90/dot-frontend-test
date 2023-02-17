import { createContext, useCallback, useEffect, useState } from "react";
import Category from "./Components/category/Category";
import api from "./Api/Api";
import { Icategories, Iselected } from "./types";
import Modal from "./Components/modal/Modal";

const initialState = {};

export const AppContext: any = createContext(null);

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  const [selected, setSelected] = useState<Iselected>(initialState);
  const [data, setData] = useState<Icategories[]>([]);
  const [showModal, setShowModal] = useState(false);

  const selectHandler = useCallback((category: string, data: string) => {
    setSelected((prev) => ({ ...prev, [category]: data }));
  }, []);

  const submitHandler = () => {
    if (Object.keys(selected).length === data.length) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelected(initialState);
  };

  useEffect(() => {
    api
      .getBallotData()
      .then((res) => setData(res.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {showModal && <Modal selected={selected} handlerClick={closeModal} />}
      <div className="App">
        <div className="ballot">
          <h2 className="ballot-title">
            Golden Globe <br></br> Award
          </h2>
        </div>
        <AppContext.Provider value={{ selectHandler, selected }}>
          <div className="container">
            {data.map((itm, idx) => (
              <Category
                key={itm.id}
                category_nomines={itm.items}
                category_title={itm.title}
                category_id={itm.id}
                isLastCategory={data.length - 1 === idx}
                submitHandler={submitHandler}
                disable_submit_button={
                  Object.keys(selected).length !== data.length
                }
              />
            ))}
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
