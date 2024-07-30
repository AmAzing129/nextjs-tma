'use client';

import { ConnectButton, Connector } from '@ant-design/web3';
import { TonWeb3ConfigProvider, telegramWallet, tonkeeper } from '@ant-design/web3-ton';

export default function AntdTonPage() {
  return (
    <TonWeb3ConfigProvider wallets={[telegramWallet, tonkeeper]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};