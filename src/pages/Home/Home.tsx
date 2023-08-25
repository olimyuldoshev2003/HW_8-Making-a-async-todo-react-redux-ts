import React, { ChangeEvent, useEffect } from "react";
import "./Home.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { completedData, deleteData, getData, postData } from "../../api/api";
import { IToDoList, handleClose, setText } from "../../reducers/values";
import { Box, Modal } from "@mui/material";

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.values.data);
  const text = useAppSelector((store) => store.values.text);
  let modal = useAppSelector((store) => store.values.modal);
  let title = useAppSelector((store) => store.values.title);
  let idx = useAppSelector((store) => store.values.idx);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  function addUser(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (text.trim().length === 0) {
      alert("Please fill it uuuuuuuuup!");
    } else {
      dispatch(postData(text));
      dispatch(setText(""));
    }
  }

  function openModal(item:IToDoList) {
    idx = item.id,
      title = item.title,
    modal = true
  }

  return (
    <div>
      <header>
        <h1>To Do List</h1>
        <form
          action=""
          onSubmit={(event: ChangeEvent<HTMLFormElement>) => addUser(event)}
        >
          <input
            type="text"
            value={text}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              dispatch(setText(event.target.value))
            }
          />
          <button>Add</button>
        </form>
      </header>
      <section>
        {data.map((item: IToDoList) => {
          return (
            <div key={item.id}>
              {item.complete === true ? (
                <h1 className="line-through text-[red]">{item.title}</h1>
              ) : (
                <h1>{item.title}</h1>
              )}
              <button onClick={() => dispatch(deleteData(item.id))}>
                Delete
              </button>
              <input
                type="checkbox"
                name=""
                id=""
                checked={item.complete}
                onClick={() => dispatch(completedData(item))}
              />
              <button onClick={() => openModal(item)}>Edit</button>
            </div>
          );
        })}
        <Modal
          open={modal}
          onClose={() => dispatch(handleClose())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="w-[250px] h-[300px] bg-[#fff] rounded-[10px] flex flex-col justify-center items-center">
            <input
              type="text"
              value={title}
              onChange={(event) => dispatch(setTitle(event.target.value))}
              className="w-[240px] h-[30px] outline-none rounded-[20px] border-[1px] border-[#000] px-[20px]"
            />
            <button
              className="p-[5px_40px] bg-[blue] text-[#fff] rounded-[20px] mt-[20px]"
              onClick={() => dispatch(editUser())}
            >
              Edit
            </button>
          </Box>
        </Modal>
      </section>
    </div>
  );
};

export default Home;
