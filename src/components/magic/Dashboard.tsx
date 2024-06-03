import React from 'react';
import { LoginProps } from '@/utils/types';
import DevLinks from './DevLinks';
import Header from './Header';
import Footer from '../Footer';

export default function Dashboard({ token, setToken }: LoginProps) {
  return (
    <div className="home-page">
      <Header token={token} setToken={setToken} />
      <div className="cards-container">
        {/* <Spacer size={10} /> */}
        {/* <SendTransaction /> */}
        {/* <Spacer size={10} /> */}
        {/* <WalletMethods token={token} setToken={setToken} /> */}
        {/* <Spacer size={15} /> */}
      </div>
      <DevLinks primary />
      <Footer/>
    </div>
  );
}
