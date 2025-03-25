/* eslint-disable no-unused-vars */
import React from "react";
import ModalCustom from "./components/modal/Modal";
import { useState } from "react";
import TableCustom from "./components/table/TableCustom";
import { useMemo } from "react";

function App() {
  const [alert, setAlert] = useState({ open: false, message: "" });
  const handleKlik = () => {
    setAlert({
      open: true,
      message: "data sudah dibuat",
    });
  };
  const handleClose = () => {
    setAlert({
      ...alert,
      open: false,
    });
  };
  const columns = useMemo(() => {
    return [
      {
        accessorKey: "nama",
        header: "Nama",
        grow: true,
      },
    ];
  });
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={handleKlik}>Klik</button>
      <TableCustom columns={columns} />
      <ModalCustom
        open={alert.open}
        onClose={handleClose}
        onCancel={handleClose}
        cancelLabel="Kembali"
        confirmLabel="Ya"
        content={alert.message}
      />
    </>
  );
}

export default App;
