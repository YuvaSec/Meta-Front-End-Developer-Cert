
![[Pasted image 20251127180427.png]]

>An ICMP is a  network layer protocol in [[what is an OSI (Open Systems Interconnection) model?|OSI]] model used by network devices to send error messages and operational information indicating success or failure when communicating with other IP devices.
>	- It helps diagnose communication issues and manage network traffic.

ICMP packets are used primarily for **error reporting**, 
	such as notifying when a destination is unreachable or when a router's time-to-live (TTL) value expires. 
They are also used by diagnostic tools like
-  ***ping*** and ***traceroute***
	- to test connectivity and trace the route packets take through a network.

ICMP operates at the [[what is an OSI (Open Systems Interconnection) model?|network layer]] (Layer 3) and is encapsulated within IP packets. 
# Unlike TCP or UDP
- ICMP is **not** used to exchange data between systems but instead communicates control information about the network.
- It is essential for network **troubleshooting** and management but does not guarantee delivery of its messages.








***In essense, 
ICMP packets carry control and error messages between network devices, facilitating network diagnostics and error handling***
![[dwioi.png]]
