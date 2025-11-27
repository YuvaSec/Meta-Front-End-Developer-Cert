- Unlike TCP, UDP does not establish a connection before sending data, 
	- nor does it guarantee packet delivery, 
	- order, 
	- or error checking, 
	- **making it simpler and faster but less reliable.**
- It transmits data packets called **datagrams directly** to the target device without verifying receipt.
![[oqlwg.png]]




- UDP is **ideal for time-sensitive applications** like 
	- video streaming, 
	- online gaming, 
	- voice over IP (VoIP), and 
	- DNS lookups, 
- Where speed is critical and occasional data loss is acceptable. 

- It supports **multiplexing via source and destination port numbers**, allowing multiple applications to communicate simultaneously without interference. 
![[pxfvr.png]]
- Due to its speed and minimal overhead, 
	- UDP is often used where low latency matters more than guaranteed delivery.



***In essense,
UDP provides a lightweight, fast communication method suitable for real-time applications but does not provide the reliability and error correction features of TCP.***

