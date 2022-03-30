import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Containers from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './styles/style.css'
import headSocial from './assets/home/7f social.svg'
import fpen from './assets/home/7F Pen.svg'
import zero7 from './assets/home/0000777.svg'
import h6tag from './assets/home/h6.svg'
import img1 from './assets/IMG-1.png'
import img2 from './assets/IMG-2.png'
import img3 from './assets/IMG-3.png'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'),
);

const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="containers-inner pb-4">
          <div className="lines">
            <img src={headSocial} alt="" className="headSocial" />
            <div className="mintButton mb-2">
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Home
                      candyMachineId={candyMachineId}
                      connection={connection}
                      txTimeout={txTimeoutInMilliseconds}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </div>
            
            <Containers fluid className="px-5">
              <Row className="profile-section">
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={img1} alt="" className="profileRep" />
                  <a href="#about" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>About</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={img2} alt="" className="profileRep" />
                  <a href="#roadmap" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>Roadmap</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={img3} alt="" className="profileRep" />
                  <a href="#team" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>Team</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
              </Row>
            </Containers>

          </div>
        </div>
        <Containers id="about">
          <h1 className="mt-4">About Us</h1>
          <div className="sub-title mb-5">The goal for 7F Social Club is to encourage ownership and self growth to our members.</div>
          <p className="about-text">7F Social Club is an investor group started by a small community of entrepreneurs aspiring to capitalize on being early to Web 3.0 ; We plan to scale a metaverse portfolio for our DAO. allowing members to be apart of what we believe is Real Estate 2.0, by allocating funds from mint to purchase our first metaverse property.This will be the original 7Fsocialclub.</p>
        </Containers>
        <Containers id="roadmap" className="pt-4">
          <h1 className="mb-3">Roadmap <span>v.01</span></h1>
          <Row className="mt-4">
            <Col md={4} className="roadmap-group">
              <h2 className="roadmap-title">PHASE 1</h2>
              <ul>
                <li>- Fill Chosen One’s List</li>
                <li>- Launch Website</li>
                <li>- Release Weekly Event Schedule</li>
                <li>- Apply for listing on all Secondary Marketplaces</li>
                <li>- Find Rarity Partner- Find Partnerships that benefit the Club</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={{ span: 4, offset: 8 }} className="roadmap-group">
              <h2 className="roadmap-title">PHASE 2</h2>
              <ul>
                <li>- Creation of the 7F DAO</li>
                <li>- Mint Day (222 Chosen Ones)</li>
                <li>- Purchase a Portals NFT   to use as the DAOs Metaverse Headquarters</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4} className="roadmap-group">
              <h2 className="roadmap-title">PHASE 3</h2>
              <h2>TBD</h2>
            </Col>
          </Row>
        </Containers>
        <Containers id="team" className="mt-4 pt-4">
          <h1>FOUNDING FATHERS</h1>
          <Row>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Puf</h2>
                <p>Creative Lead</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Slimsy</h2>
                <p>Community Manager <br />(Twitter)</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Mrfallback</h2>
                <p>Markeeting Manager</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Chaos</h2>
                <p>Community Manager <br />(Discord)</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Kellz</h2>
                <p>Advisor/Administrator</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>Wilt</h2>
                <p>Lead Moderator</p>
              </div>
            </Col>
          </Row>
          <h1>DEV TEAM</h1>
          <Row>
            <Col md={6}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>HolmzE</h2>
              </div></Col>
            <Col md={6}>
              <div className="team-group">
                <img src={img1} alt="" className="rounded-circle" width="250" height="250" />
                <h2>AspireDev</h2>
              </div></Col>
          </Row>
        </Containers>
        <Containers id="faq" className="pt-4">
          <h1 className="mb-3">FAQ</h1>
          <div className="faq-group">
            <h2 className="faq-title">What is a 7F Prisoner?</h2>
            <p>7F Prisoners is the Genesis collection created by the 7F Social Club. A collection of unique individuals have been imprisoned in the year 2103 after committing cyber crimes against society. These individuals were once part of an organization which sold human remains, salvaged parts and controlled the entire blackmarket</p>
          </div>
          <div className="faq-group">
            <h2 className="faq-title">How many prisoners will be minted?</h2>
            <p>222 Prisoners will be minted in the genesis collection. More prisoners can arrive at any time.</p>
          </div>
          <div className="faq-group">
            <h2 className="faq-title">How much will it cost to mint?</h2>
            <p>2 SOL</p>
          </div>
          <div className="faq-group">
            <h2 className="faq-title">Will there be Rarity rankings?</h2>
            <p>Yes! Rarity Charts will be released directly after mint.Ranging from Minimum Security to Death Row Prisoners.</p>
          </div>
        </Containers>
    </ThemeProvider>
  );
};

export default App;
