export const data = [
    {
        id: `1`,
        title: `Distributed Database`,
        content: `A distributed database is a system where data is stored across multiple computers (nodes) instead of a single server. In blockchain, each node has a copy of the entire database, ensuring security, transparency, and decentralization. This prevents data loss, manipulation, or a single point of failure.`,
        short_content:`A distributed database is a system where data is stored across multiple computers (nodes) instead of a single server. In blockchain, each node`,
        example: `Traditional Banking (Centralized Database): Imagine you have a savings account in a bank. All your transaction records are stored in the bank’s central server. If this server is hacked or crashes, you could lose access to your data, and the bank controls all updates.
        Blockchain (Distributed Database): Now, imagine if every branch of the bank had an exact copy of your account details, and every transaction was recorded simultaneously across all branches. Even if one branch’s system fails, the others still have your data, ensuring security and trust.`,
        conclusion: `In blockchain, all transactions are stored on multiple nodes, making it tamper-proof because no single entity can alter the data without consensus from others. This is why Bitcoin, Ethereum, and other blockchain networks use a distributed database—to ensure decentralization and reliability.`
    },
    {
        id: `2`,
        title: `Distributed Ledger`,
        content: `A distributed ledger is a database that is shared, synchronized, and maintained across multiple locations or nodes. Unlike traditional ledgers, which are controlled by a central authority (like a bank), a distributed ledger ensures transparency, security, and decentralization because every participant in the network has a copy of the ledger.`,
        short_content:`A distributed ledger is a database that is shared, synchronized, and maintained across multiple locations or nodes. Unlike traditional ledgers, which are`,
        example: `Traditional Bank Ledger (Centralized Ledger): Imagine you deposit ₹1000 in a bank. The bank updates its central database to reflect your balance. If the bank’s system crashes or gets hacked, your transaction history could be lost or manipulated.
        Blockchain Ledger (Distributed Ledger): Instead of a single bank maintaining the record, imagine that thousands of people have a copy of the same ledger. Every time you make a transaction, all copies are updated simultaneously, and no single entity can change past records without agreement from the majority.`,
        conclusion: `Tamper-Proof: Transactions are cryptographically secured and cannot be altered. No Single Point of Failure: Even if one node fails, the network continues to operate. Trustless System: Participants don’t need to trust a single authority because the system itself ensures transparency.`
    },
    {
        id: `3`,
        title: `Peer-to-Peer (P2P) Network`,
        content: `A peer-to-peer (P2P) network is a system where computers (nodes) communicate directly with each other without relying on a central server. Each node in the blockchain network stores and verifies data, making the system decentralized and resistant to failures.`,
        short_content:`A peer-to-peer (P2P) network is a system where computers (nodes) communicate directly with each other without relying on a central server. Each`,
        example:`Cloud Storage (Centralized Network): When you download a file from Google Drive, you get it from a single central server. If the server is down, you can’t access your file.
        Torrent (P2P Network): In torrenting, you download pieces of the file from multiple users (peers) instead of a single server. Even if one peer goes offline, you can still get the file from others.`,
        conclusion:`Similarly, blockchain operates on a P2P network, where every participant (node) shares transaction data with others, ensuring security, fault tolerance, and decentralization.`,
    },
    {
        id:`4`,
        title:`Atomic Broadcast`,
        content:`Atomic Broadcast is a communication protocol that ensures all nodes in a distributed system receive messages in the same order and without inconsistencies. This is crucial in blockchain to maintain consistency and agreement on transaction order across all nodes.`,
        short_content:`Atomic Broadcast is a communication protocol that ensures all nodes in a distributed system receive messages in the same order and without inconsistencies.`,
        example:`Without Atomic Broadcast (Unordered Messaging): Imagine a group chat where messages arrive at different times for different users. If Person A sees "Buy 10 BTC" before "Sell 10 BTC", but Person B sees the opposite, they would interpret the conversation differently.
        With Atomic Broadcast (Ordered Messaging): Now, imagine the chat ensures that all users see messages in the exact same order. If "Buy 10 BTC" appears before "Sell 10 BTC", everyone sees it that way, avoiding confusion.`,
        conclusion:`In blockchain, atomic broadcast ensures that all nodes agree on the same transaction order, preventing double spending and maintaining ledger consistency. Consensus algorithms like Paxos, Raft, and PBFT use atomic broadcast to synchronize distributed systems.`,
    },
    {
        id:`5`,
        title:`Consensus`,
        content:`Consensus is the process by which all nodes in a blockchain network agree on a single version of the truth (i.e., which transactions are valid and should be added to the blockchain). Since there is no central authority, blockchain relies on consensus algorithms to ensure trust, security, and consistency across all participants.`,
        short_content:`Consensus is the process by which all nodes in a blockchain network agree on a single version of the truth (i.e., which transactions are valid and`,
        example:`Imagine five friends deciding on a restaurant to eat at:
        If everyone votes for different places, they won’t reach a decision.
        They agree on a rule: The place with the majority vote wins.Even if one friend tries to cheat by casting multiple votes, the group follows the agreed rule and ignores invalid votes.`,
        conclusion:`Consensus ensures blockchain networks remain secure, decentralized, and tamper-proof while preventing fraud (like double spending.`,
    },
    {
        id:`6`,
        title:`Byzantine Fault Tolerance (BFT)`,
        content:`Byzantine Fault Tolerance (BFT) is a property of a distributed system that allows it to function correctly even if some nodes act maliciously or send false information. It is named after the Byzantine Generals' Problem, where different generals must coordinate an attack but some may be traitors sending false messages.In blockchain, BFT ensures that all honest nodes reach the same decision despite faulty or malicious nodes, preventing issues like double spending and network failures.`,
        short_content:`Byzantine Fault Tolerance (BFT) is a property of a distributed system that allows it to function correctly even if some nodes act maliciously or send`,
        example:`Imagine several generals surrounding a city. They must agree on a common attack time, but some generals are traitors who send misleading information.
        Without BFT: If traitors send conflicting attack times, the army may fail to act together, leading to defeat.
        With BFT: The system ensures that all loyal generals follow the majority’s decision, filtering out false messages.`,
        conclusion:`Ensures consensus even when some nodes act maliciously.
        Prevents double-spending attacks and fraud.
        Keeps the network decentralized and secure without needing a central authority.`,
    },{
        id:`7`,
        title:`Digital Signatures`,
        content:`A digital signature is a cryptographic technique used to verify the authenticity and integrity of digital messages or transactions. In blockchain, digital signatures ensure that transactions are valid, tamper-proof, and non-repudiable (i.e., the sender cannot deny sending them).`,
        short_content:`A digital signature is a cryptographic technique used to verify the authenticity and integrity of digital messages or transactions. In blockchain, digital`,
        example:`Traditional Signing: When signing a contract, your handwritten signature proves you agreed to the terms.
        Digital Signing: Instead of a handwritten signature, a cryptographic algorithm generates a unique signature based on the message and the sender’s private key.`,
        conclusion:`Secure & Tamper-Proof: Prevents unauthorized modifications.
         Verifiable: Public keys allow anyone to confirm authenticity.
         Decentralized: No central authority is needed to validate signatures.`
    },{
        id:`8`,
        title:`Zero-Knowledge Proofs (ZKP)`,
        content:`A Zero-Knowledge Proof (ZKP) is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that they know a secret without revealing the secret itself.
        This is useful in blockchain for privacy-preserving transactions, where a user can prove they have enough funds or valid credentials without exposing private data.`,
        short_content:`A Zero-Knowledge Proof (ZKP) is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that they know a`,
        example:`Without ZKP (Traditional Proof)
        You tell your friend the password → They enter it → The door opens → You proved your knowledge, but now they know the password too.
        With ZKP
        You go inside the room and come out without telling the password.Your friend now believes you know the password without ever learning it themselves.`,
        conclusion:`Privacy-Preserving – Transactions remain confidential.
        Secure & Trustless – No need to reveal sensitive data.
        Efficient – Reduces data exposure while proving correctness.`
    },{
        id:`9`,
        title:`Smart Contracts`,
        content:`Smart contracts are self-executing contracts with predefined rules and conditions written in code. When these conditions are met, the contract automatically executes the terms without the need for intermediaries.`,
        short_content:`Smart contracts are self-executing contracts with predefined rules and conditions written in code. When these conditions are met, the contract`,
        example:`Traditional Contract: You hire a lawyer to draft a contract, and a bank to enforce it. If one party breaches the agreement, you need to go to court to resolve the dispute.`,
        conclusion:`Smart Contract: You write the contract as code on a blockchain. When conditions are met (e.g., payment received), the contract automatically executes. If either party fails to meet their obligations, the contract enforces penalties or refunds without human intervention.`
    },
    {
        id:`10`,
        title: `Proof of Work (PoW)`,
        content: `Proof of Work (PoW) is a consensus mechanism used in blockchain networks to validate transactions and add new blocks to the chain. It requires participants (miners) to solve complex mathematical puzzles to secure the network.`,
        short_content:`Proof of Work (PoW) is a consensus mechanism used in blockchain networks to validate transactions and add new blocks to the chain. It requires`,
        example: `Imagine a lottery where participants must solve a difficult puzzle to win a prize. The first one to solve it gets the reward, and their answer is easily verifiable by others.`,
        conclusion:`PoW ensures blockchain security by making it computationally expensive to alter transaction history. However, it consumes high energy and has scalability limitations, leading to alternatives like Proof of Stake (PoS).`
    },{
        id:`11`,
        title: `Proof of Stake (PoS)`,
        content: `Proof of Stake (PoS) is a consensus mechanism where validators are chosen to create new blocks based on the amount of cryptocurrency they hold and are willing to 'stake' as collateral, rather than solving complex puzzles like in Proof of Work (PoW).`,
        short_content:`Proof of Stake (PoS) is a consensus mechanism where validators are chosen to create new blocks based on the amount of cryptocurrency they hold and are willing`,
        example: `Imagine a lottery where the chances of winning are based on the number of tickets you own. In PoS, the more cryptocurrency a validator stakes, the higher the chance of being selected to validate transactions and earn rewards.`,
        conclusion: `PoS is more energy-efficient than PoW, as it removes the need for extensive computational work. It enhances security and decentralization while reducing the environmental impact of blockchain networks.`
    },{
        id: `12`,
        title: `Proof of Authority (PoA)`,
        content: `Proof of Authority (PoA) is a consensus mechanism where a limited number of approved validators are given the authority to create new blocks. Instead of staking cryptocurrency or solving complex puzzles, validators are selected based on their identity and reputation.`,
        short_content:`Proof of Authority (PoA) is a consensus mechanism where a limited number of approved validators are given the authority to create new blocks. Instead of staking cry`,
        example: `Imagine a gated community where only trusted security guards are allowed to approve visitors. In PoA, only pre-approved validators with a strong reputation can validate transactions, ensuring fast and efficient block creation.`,
        conclusion: `PoA provides high transaction throughput and efficiency, making it ideal for private and consortium blockchains. However, it sacrifices decentralization since only a few trusted validators control the network.`
    }  
];
