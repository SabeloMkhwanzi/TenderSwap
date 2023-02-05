# Tenderswap Frontend

This is UniswapV2 fork - Deployed on Filecoin FEVM protocol for decentralized exchange of Filecoin tokens.

- Website: [uniswap.io](https://uniswap.io/)

### Please NOTE this Project is a Hackathon build for experiment on Filecoin FEVM - NOT FOR REAL ASSETS UITILIZATION

### Project mission

- There are items required for every blockchain in order to succeed. These are required to make sure there is enough liquidity on-chain and (eventually) enough movement of funds from other chains. While these don’t leverage fundamental programmable storage primitives, they are nonetheless important for the functioning and stacking of the ecosystem.

### Project Solution

#### How to Achivce this:

- We have deployed all necessary smart-contracts for the DEX on the Filecoin FEVM protocol test network which replicate the functionalities of the Ethereum’s main network.
- We will create dumpy tokens and deploy them on Filecoin-Hyperspace Testnet and add Liquidity for any to be able to swap toknes on the DEX.
- We will use Uniswap-interface to connect the smart contract with front-end for UX
- The user will be able to connect thier Metamask’s wallet to Filecoin-Hyperspace Testnet to interact with the DEX.

### Features

- For users on FVM need to be able to exchange FIL for other tokens issued on-chain.
- DEX is fully decentralized, trustless and uses the Uniswap V2 Smart Contracts, which are battle-tested for multiple years now to provide you the maximum security
- User-friendly interfaces
- DEX functions such as Swap, Pool

### Deployed Smart Contracts on Filecoin-Hyperspace Testnet:

- Deloyed Contract UniswapV2Factory: 0xf8FA5ba9E167929B34B2E9808557C041bcecc230
- Deloyed Contract UniswapV2Router02:0x150B934c9251838034E9408da2d42Bf14F9d5110
- Deloyed Contract WFIL: 0xF80911073cbf8113D6a6F7Fb73610d98177F2329

## Deployed Smart Contracts of dumpy Tokens List on Filecoin-Hyperspace Testnet:

1. TenderSwap TDT: 0x9B4E7CA634574ce3A09cC0383824588DCd55C7f1
2. USD Coin USDCF: 0xcee18C0Aa1443EEBC9A0C31e3fca7a99f6825213
3. Tether USDT: 0xE4f17AE93C3207a4c410F510a612042F69Ee0B07
4. Bitcoin BTCF: 0x22Bfa60188c91967E439d6AE7aA640039A68b8e7
5. Ethereum ETHF: 0x7BE84D72882E0744358289BecA468fC05bd18bCF
6. LINKF: 0x99405C18336808D817EdC793CfEDB0E94b700F37
7. DAIF: 0x0ae8C187fBBa3C20c50C261Fb4BE00A8aEA7e3fe
8. BNB BNBF: 0x69f058209F4f86bB6825ec1CB37a5f7522A73E9a
9. Uniswap UNI: 0xe3e1842F85CdA1D510E35D2655F336b88c117b12
10. Filecoin FIL: 0x61D9b1ABC4e516FC91c417A579699C091c59A2dC

### Install Dependencies

```bash
yarn
```

### Configure Environment

Rename `.env.local.example` to `.env.local` and fill in the appropriate variables.

### Run

```bash
yarn start
```
