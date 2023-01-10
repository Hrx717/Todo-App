import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity])
    // console.log(listData)
    setlistData((listData) => {
      const updatedList = [activity, ...listData];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <div className="add-note">
          <input
            type="text"
            placeholder="Add Activity.."
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>+</button>
        </div>
        <p className="List-heading">Here is your List</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>X</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button className="btn-remove" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
};

export default TodoList;
