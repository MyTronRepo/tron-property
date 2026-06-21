# DApp TRON System

## Overview

DApp TRON System is a decentralized real estate document management platform built on the TRON blockchain. The system aims to increase transparency, security, and resistance to document forgery by storing ownership records and document verification data on a decentralized blockchain network.

This project is developed as a Master's Thesis project with the title:

**"Using the Decentralized TRON Blockchain System to Increase Security, Transparency, and Prevent Forgery of Real Estate Documents"**

## Main Features

- Property registration
- Digital document registration
- Document hash verification
- Shared ownership management
- Ownership transfer management
- Transfer history tracking
- Role-based access control
- Public document authenticity verification
- IPFS integration for document storage

---

## System Roles

### Owner

- Register property
- Register document
- Replace document before approval
- Request ownership transfer

### Buyer

- Approve ownership transfer requests

### Admin

- Verify or reject properties
- Verify or revoke documents
- Approve ownership transfers
- Manage administrator account

### Observer

- View public property information
- Verify document authenticity
- View transfer history

---

## Technology Stack

### Blockchain

- TRON Blockchain
- Nile Testnet
- Solidity
- TronBox
- TronWeb

### Backend

- Node.js
- Express.js
- MongoDB

### Storage

- IPFS

### Frontend

- React.js
- TronLink Wallet

---

## Project Structure

```text
dapp-tron-system
│
├── contracts
├── migrations
├── tests
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── services
│   ├── models
│   ├── utils
│   └── server.js
│
├── package.json
├── tronbox-config.js
└── README.md
```

---

## Development Status

Current Phase:

- [x] Project initialization
- [x] Backend setup
- [ ] Data model design
- [ ] Smart contract development
- [ ] IPFS integration
- [ ] Ownership transfer implementation
- [ ] Testing
- [ ] Nile Testnet deployment

---

## License

MIT License
