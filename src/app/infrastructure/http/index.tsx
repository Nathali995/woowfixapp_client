import {IHttp} from 'src/app/infrastructure/http/IHttp';
import React from 'react';
import Http from 'src/app/infrastructure/http/Http';

const {createContext, useContext} = React;

export interface Data {
  url: string;
  body?: {};
  responseType?: string;
}

export const HttpImpl: IHttp = new Http();
const HttpImplContext = createContext<IHttp>(HttpImpl);

const HttpImplementationProvider = ({children}: {children: JSX.Element}) => {
  return (
    <HttpImplContext.Provider value={HttpImpl}>
      {children}
    </HttpImplContext.Provider>
  );
};

export const useHttpImpl = () => {
  return useContext(HttpImplContext);
};

export default HttpImplementationProvider;