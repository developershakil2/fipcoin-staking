'use client';

import { wagmiAdapter, projectId } from './wagmiConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { bsc} from '@reown/appkit/networks';
import React, { type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined');
}

const metadata = {
  name: 'FIPCOIN',
  description:
    'Discover FIPCOIN, the innovative blockchain-powered platform for secure, transparent, and efficient event ticketing. Say goodbye to fraud and scalping with decentralized technology',
  url: 'https://dexticket.com',
  icons: ['https://res.cloudinary.com/dnaqaemuc/image/upload/v1737519238/cyde7xcibkd8nz0igmcz.png'],
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [bsc],
  defaultNetwork: bsc,
  metadata: metadata,
  features: {
    analytics: true,
    email: false,
    socials: false,
  },
});

const openModal = async () => {
  await modal.open(); 
};


function WalletProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);


   
   
  
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export  {WalletProvider, openModal};
