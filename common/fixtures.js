export const Presenters = {
  "aaron-sutula": {
    name: "Aaron Sutula",
    organization: "Programmer, Textile",
    photo: "avatar-aaron-sutula.png",
  },
  "andrew-hill": {
    name: "Andrew Hill",
    organization: "Co-founder and CEO, Textile",
    photo: "avatar-andrew-hill.jpg",
  },
  "bradley-kam": {
    name: "Bradley Kam",
    organization: "Co-founder, Unstoppable Domains",
    photo: "avatar-bradley-kam.png",
  },
  "brett-shear": {
    name: "Brett Shear",
    organization: "Co-founder and COO, Fleek",
    photo: "avatar-brett-shear.png",
  },
  "greg-markou": {
    name: "Greg Markou",
    organization: "Co-founder and CTO, ChainSafe",
    photo: "avatar-greg-markou.jpg",
  },
  "joel-thorstensson": {
    name: "Joel Thorstensson",
    organization: "Co-founder, 3box",
    photo: "avatar-joel-thorstensson.jpeg",
  },
  "jonathan-schwartz": {
    name: "Jonathan Schwartz",
    organization: "Co-founder, Open Work Labs (OWL)",
    photo: "avatar-jonathan-schwartz.png",
  },
  "juan-benet": {
    name: "Juan Benet",
    organization: "Founder and CEO, Protocol Labs",
    photo: "avatar-juan-benet.png",
  },
  "kyle-tut": {
    name: "Kyle Tut",
    organization: "Co-founder and CEO, Piñata",
    photo: "avatar-kyle-tut.jpg",
  },
  "mike-godsey": {
    name: "Mike Godsey",
    organization: "GM, Infura",
    photo: "avatar-mike-godsey.jpeg",
  },
  "molly-mackinlay": {
    name: "Molly Mackinlay",
    organization: "Project Lead, IPFS",
    photo: "avatar-molly-mackinlay.jpg",
  },
  "pooja-shah": {
    name: "Pooja Shah",
    organization: "Filecoin",
    photo: "avatar-pooja-shah.jpg",
  },
  "raullen-chai": {
    name: "Raullen Chai",
    organization: "Co-founder, IoTeX",
    photo: "avatar-raullen-chai.png",
  },
  "steven-allen": {
    name: "Steven Allen",
    organization: "Tech Lead, IPFS",
    photo: "avatar-steven-allen.png",
  },
  "yuni-graham": {
    name: "Yuni Graham",
    organization: "Protocol Labs",
    photo: "avatar-yuni-graham.jpg",
  },
};

export const Organizations = {
  "ipfs": {
    name: "IPFS",
    logo: "logo-ipfs.png",
    url: "https://ipfs.io/",
  },
  "filecoin": {
    name: "Filecoin",
    logo: "logo-filecoin.png",
    url: "https://filecoin.io/",
  },
  "protocol-labs": {
    name: "Protocol Labs",
    logo: "logo-protocol-labs.png",
    url: "https://protocol.ai/",
  },
  "infura": {
    name: "Infura",
    logo: "logo-infura.png",
    url: "https://infura.io/",
  },
  "textile": {
    name: "Textile",
    logo: "logo-textile.png",
    url: "https://textile.io/",
  },
  "pinata": {
    name: "Pinata",
    logo: "logo-pinata.png",
    url: "https://pinata.cloud/",
  },
  "fleek": {
    name: "Fleek",
    logo: "logo-fleek.jpg",
    url: "https://fleek.co/",
  },
  "unstoppable-domains": {
    name: "Unstoppable Domains",
    logo: "logo-unstoppable-domains.png",
    url: "https://unstoppabledomains.com/",
  },
  "3box": {
    name: "3box",
    logo: "logo-3box.png",
    url: "https://3box.io/",
  },
  "chainsafe": {
    name: "ChainSafe",
    logo: "logo-chainsafe.png",
    url: "https://chainsafe.io/",
  },
  "owl": {
    name: "Open Work Labs",
    logo: "logo-owl.png",
    url: "https://www.openworklabs.com/",
  },
  "iotex": {
    name: "IoTeX",
    logo: "logo-iotex.png",
    url: "https://www.iotex.io/",
  },
}

export const ScheduleOne = [
  {
    time: "9:45 AM PT",
    name: "Casual Meet & Greet",
    value: "Come say hi and hang out before the official start of the event.",
    duration: 15,
    presenters: null,
    video_link: null,
  },
  {
    time: "10:00 AM PT",
    name: "Introduction",
    value: 
      "Welcome to the IPFS Pinning Summit! The IPFS ecosystem has grown significantly in the last year, creating new opportunities for services and applications. In this talk, we discuss ecosystem growth, the 2020 project roadmap, and what we hope to accomplish from the inaugural IPFS Pinning Summit.",
    duration: 35,
    presenters: [Presenters["molly-mackinlay"]],
    video_link: null,
  },
  {
    time: "10:40 AM PT",
    name: "IPFS 0.5",
    value:
      "A presentation on IPFS 0.5, and the features and metrics relevant for pinning services and other infrastructure and service providers.",
    duration: 25,
    presenters: [Presenters["steven-allen"]],
    video_link: null,
  },
  {
    time: "11:05 AM PT",
    name: "Break",
    value: null,
    duration: 10,
    presenters: null,
    video_link: null,
  },
  {
    time: "11:15 AM PT",
    name: "Pinning advanced data structures — Thread and Bucket pinning at Textile",
    value:
      "Textile’s latest releases of ThreadsDB and Buckets come with new pinning capabilities that support dynamic datasets and IPNS addresses. In this talk, we will highlight how Threads, Buckets, and IPFS can enable new forms of pinning services.",
    duration: 25,
    presenters: [Presenters["andrew-hill"]],
    video_link: null,
  },
  {
    time: "11:45 AM PT",
    name: "IPFS at Infura, a Web3 development suite",
    value: 
      "Overview of the past, present, and a brief glimpse of the future for IPFS at Infura. IPFS is an essential part of the Infura Web3 development suite and we will talk about why we started to support it, how developers use it today, and what's to come.",
    duration: 25,
    presenters: [Presenters["mike-godsey"]],
    video_link: null,
  },
  {
    time: "12:15 PM PT",
    name: "Super Pinning with Fleek's New IPFS/S3 Product",
    value: 
      "Learn how to use Fleek's new IPFS/S3 product to upload, pin & fetch files to/from IPFS at lightning speed thanks to built in compression, image resizing, CDN, & more!",
    duration: 25,
    presenters: [Presenters["brett-shear"]],
    video_link: null,
  },
  {
    time: "12:45 PM PT",
    name: "Is Da Vinci Responsible for Maintaining the Mona Lisa?",
    value: 
      "When data is created on IPFS, who is responsible for maintaining that data? In this talk, Kyle dives into data permanence and discusses how to keep the data behind a CID alive.",
    duration: 25,
    presenters: [Presenters["kyle-tut"]],
    video_link: null,
  },
  {
    time: "1:15 PM PT",
    name: "Using Ceramic to control pinsets with DIDs",
    value: 
      "Ceramic combines merkle linked data with decentralized identifiers to create a public network of mutable documents. In this talk we will explore how this can be used to let any DID control data pinsets.",
    duration: 25,
    presenters: [Presenters["joel-thorstensson"]],
    video_link: null,
  },
  {
    time: "1:45 PM PT",
    name: "Sending, Receiving, and Validating Filecoin Payments",
    value: 
      "If you're an IPFS pinning service, infrastructure provider, or just interested in learning about accepting Filecoin as a form of payment without running your own Filecoin node, this talk is for you! First, we'll construct and send a Filecoin transaction together. Next, we'll locate the transaction on the network in a couple different ways, which might be useful for confirming a customer's payment. We'll wrap up by comparing the different wallet options to expect by Mainnet launch.",
    duration: 25,
    presenters: [Presenters["jonathan-schwartz"]],
    video_link: null,
  },
  {
    time: "2:15 PM PT",
    name: "Break",
    value: null,
    duration: 15,
    presenters: null,
    video_link: null,
  },
  {
    time: "2:30 PM PT",
    name: "Blockchain domains + IPFS = Decentralized Websites",
    value: 
      "Traditional DNS has two points of failure - domain names require centralized custodians and content is stored on servers controlled by one company, meaning websites can be taken down. Unstoppable Domains builds domain registries on blockchains. These domains are not part of DNS and are stored in users’ Ethereum wallets. The user signs a message with their private key and writes their IPFS hash to the blockchain, giving them the power to put up or take down their website. Domains work in apps like MyEtherWallet, Trust Wallet, and Opera Browser.",
    duration: 25,
    presenters: [Presenters["bradley-kam"]],
    video_link: null,
  },
  {
    time: "3:00 PM PT",
    name: "Make Your Home Not Spy On You - Ucam: Indoor Camera with Full Data Sovereignty",
    value: 
      "We're surrounded by billions of Internet-connected and intelligent devices, which are observing and recording us all the time. The dream of a smart, safe, and efficient future is threatened by intrusive surveillance. Ucam, powered by IoTeX, is the next-gen indoor camera that is user-centric, feature-packed, and fully private. By shifting data ownership from corporations to consumers, Ucam ensures value extracted from data is delivered to their rightful owner. This presentation introduces Ucam’s technology including blockchain identity, decentralized storage (IPFS), and e2e encryption.",
      duration: 25, 
    presenters: [Presenters["raullen-chai"]],
    video_link: null,
  },
  {
    time: "3:30 PM PT",
    name: "Day 1 Close",
    value: "We recap Day 1, and provide a preview of what's to come on Day 2 of the IPFS Pinning Summit.",
    duration: 20,
    presenters: [Presenters["juan-benet"]],
    video_link: null,
  },
];

export const ScheduleTwo = [
  {
    time: "9:45 AM PT",
    name: "Casual Meet & Greet",
    value: "Come say hi and hang out before the official start of the event.",
    duration: 15,
    presenters: null,
    video_link: null,
  },
  {
    time: "10:00 AM PT",
    name: "Opportunities for 2020-2021",
    value: "Juan Benet kicks off Day 2 describing some of the many opportunities that will exist for companies building web3 infrastructure in 2020-2021. Pooja Shah provides context on how Filecoin fits in the picture.",
    duration: 30,
    presenters: [Presenters["juan-benet"], Presenters["pooja-shah"]],
    video_link: null,
  },
  {
    time: "10:40 AM PT",
    name: "Pinning APIs & Use Cases",
    value:
      "In this presentation, we discuss current and potential pinning use cases and how a standardized IPFS Pinning API can meet these envisioned needs.",
    duration: 25,
    presenters: [Presenters["juan-benet"]],
    video_link: null,
  },
  {
    time: "11:10 AM PT",
    name: "Pinning Service Integrations in IPFS Applications",
    value: "IPFS Pinning Services could see increased usage through direct integrations with IPFS applications. In this talk, we discuss some of these applications and specific technical integration points.",
    duration: 25,
    presenters: [Presenters["molly-mackinlay"]],
    video_link: null,
  },
  {
    time: "11:40 AM PT",
    name: "Break",
    value: null,
    duration: 20,
    presenters: null,
    video_link: null,
  },
  {
    time: "12:00 PM PT",
    name: "Filecoin Integrations for web3 Infrastructure",
    value: "Filecoin presents many promising business opportunities for IPFS pinning services. We describe how Filecoin works, how it leads to unique properties in the underlying protocol, network, and token, and how these properties can lead to valuable opportunities for IPFS pinning services and other web3 infrastructure providers.",
    duration: 35,
    presenters: [Presenters["pooja-shah"], Presenters["juan-benet"]],
    video_link: null,
  },
  {
    time: "12:40 PM PT",
    name: "Into the Powergate",
    value: 
      "The Powergate is an API driven solution for deploying multitiered storage across Filecoin and IPFS. Persistent storage on Filecoin allows rich storage configuration for data such as replication factor, miner selection, deal renewal, and repair. Network available storage is configurable and provided through a connected IPFS peer or pinning network.",
    duration: 35,
    presenters: [Presenters["andrew-hill"], Presenters["aaron-sutula"]],
    video_link: null,
  },
  {
    time: "1:20 PM PT",
    name: "Break",
    value: null,
    duration: 10,
    presenters: null,
    video_link: null,
  },
  {
    time: "1:30 PM PT",
    name: "Summit Recap",
    value: "Thanks for joining the IPFS Pinning Summit! We recap the 2-day summit and key takeaways.",
    duration: 5,
    presenters: [Presenters["molly-mackinlay"]],
    video_link: null,
  },
  {
    time: "1:35 PM PT",
    name: "Interactive Sessions",
    value: "We have three breakout tracks for interactive sessions: lightning talks, IPFS Pinning API workshop, and post-presentation Q&A.",
    duration: 115,
    presenters: null,
    video_link: null,
  },
];
