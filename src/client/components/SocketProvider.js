import React, { useContext, useEffect, useState, createContext } from "react";
import io from "socket.io-client";

export const socketContext = createContext();

/**
 * 子コンポーネントを受け取り、socket.ioを呼び出せるようにする
 * @param {子コンポーネント} children
 */
export const SocketProvider = ({ children }) => {
  const [socket, _] = useState(() => io.connect("localhost:3000"));

  useEffect(() => {
    return function cleanup() {
      socket.close();
    };
  }, []);

  return <socketContext.Provider value={socket}>{children}</socketContext.Provider>;
};

export const useSocket = (setEvent, removeEvent) => {
  const socket = useContext(socketContext);

  useEffect(() => {
    setEvent(socket);
    return () => {
      removeEvent(socket);
    };
  }, []);

  return socket;
};
