import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { TaskAdd } from "./TaskAdd";
import { dataCard } from "../../data/Task.js";

export const Task = () => {
  const [addDataCard, setAddDataCard] = useState(dataCard);

  const onClickTaskAdd = (value) => {
    //console.log(value);

    const newTaskObj = {
      //id: addDataCard.at(- 1).id + 1, nueva forma de conseguir el indece del array
      id: addDataCard[addDataCard.length - 1].id + 1,
      taskTitle: value,
    };

    setAddDataCard([...addDataCard, newTaskObj]);

    console.log(newTaskObj);
  };

  const onClickDelete = (id) => {
    const newArrCard = dataCard.filter((item) => item.id != id);
    setAddDataCard(newArrCard);
  };

  return (
    <>
      <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
        <div className="row py-5">
          {addDataCard.map((item) => (
            <TaskCard
              key={item.id}
              dataCardItem={item}
              deleteCard={(value) => onClickDelete(value)}
            />
          ))}
        </div>

        <TaskAdd onClickPadre={(value) => onClickTaskAdd(value)} />
      </div>
    </>
  );
};

//Callback
//<TaskAdd onClickPadre={(value) => onClickTaskAdd
