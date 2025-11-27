
- TCP operates at the transport layer of the [[what is an OSI (Open Systems Interconnection) model?|OSI]] model 
- It is responsible for establishing reliable, connection-oriented communication between devices.
- It breaks data from applications into packets, assigns sequence numbers, and sends them to the IP layer for routing and delivery.
- It establishes a connection using a (**three-way handshake**) before data transfer and terminates it with a four-way handshake after transmission.
![[nddxu.jpeg]]
- TCP ensures all packets are received error-free and in the correct order by *retransmitting* lost or corrupted packets and (**acknowledging**) received ones.







# Core:

- TCP manages flow control and congestion control to optimize data transmission rates and prevent overwhelming the receiver.
    
- It is widely used in applications like 
	- web browsing, 
	- email, 
	- file transfers, 
	- remote access, and 
	- **VPNs due to its reliable data delivery**.
    
- TCP works closely with IP (Internet Protocol), making up the core protocols of the internet for end-to-end communication between computers.
![[Pasted image 20251127173714.png]]