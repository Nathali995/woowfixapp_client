import {IStorage} from 'src/app/infrastructure/storage/IStorage';
import React from 'react';
import AsyncStorageImpl from 'src/app/infrastructure/storage/Storage';

const {createContext, useContext} = React;

export const asyncStorageImpl: IStorage = new AsyncStorageImpl();

const AsyncStorageImplContext = createContext<IStorage>(asyncStorageImpl);

const AsyncStorageImplProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <AsyncStorageImplContext.Provider value={asyncStorageImpl}>
      {children}
    </AsyncStorageImplContext.Provider>
  );
};

export const useAsyncStorageImpl = () => {
  return useContext(AsyncStorageImplContext);
};

export default AsyncStorageImplProvider;