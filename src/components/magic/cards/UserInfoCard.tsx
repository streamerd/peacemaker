import { useCallback, useEffect, useState } from 'react';
import { LoginProps } from '@/utils/types';
import { logout } from '@/utils/common';
import { useMagic } from '../MagicProvider';
import { getNetworkName } from '@/utils/network';

const UserInfo = ({ token, setToken }: LoginProps) => {
  const { magic, web3 } = useMagic();
  const [publicAddress, setPublicAddress] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPublicAddress(localStorage.getItem('user') || '');
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (magic) {
      await logout(setToken, magic);
    }
  }, [magic, setToken]);

  return (
    <>
    {publicAddress && (
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          <div className="text-white text-sm">Eth</div>
        </div>
        <div className="text-white text-sm">
          {publicAddress ? `${publicAddress.substring(0, 6)}..${publicAddress.substring(publicAddress.length - 4)}` : 'Fetching address...'}
        </div>
        <div 
          className="cursor-pointer text-red-500 text-sm"
          onClick={disconnect}
        >
          Disconnect
        </div>
      </div>
    )}
  </>
  );
};

export default UserInfo;
