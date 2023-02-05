import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

import { NetworkConnector } from './Network'

const POLLING_INTERVAL = 10000
const NETWORK_URL =
  process.env.REACT_APP_IS_PRODUCTION_DEPLOY === 'true'
    ? process.env.REACT_APP_NETWORK_URL_PROD
    : process.env.REACT_APP_NETWORK_URL

export const network = new NetworkConnector({
  urls: { [Number(process.env.REACT_APP_CHAIN_ID)]: NETWORK_URL },
  pollingInterval: POLLING_INTERVAL * 3
})

// export const injected = new InjectedConnector({
//   supportedChainIds: [Number(process.env.REACT_APP_CHAIN_ID)]
// })

export const injected = new InjectedConnector({
  supportedChainIds: [3141]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: { 3141: 'https://filecoin-hyperspace.chainstacklabs.com/rpc/v1' },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: false,
  pollingInterval: POLLING_INTERVAL
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: 'https://filecoin-hyperspace.chainstacklabs.com/rpc/v1',
  appName: 'Shinobi',
  appLogoUrl: 'https://shinobi.ubiq.ninja/favicon.png'
})

// export const walletlink = new WalletLinkConnector({
//   url: NETWORK_URL,
//   appName: 'TenderSwap',
//   appLogoUrl: ''
// })
