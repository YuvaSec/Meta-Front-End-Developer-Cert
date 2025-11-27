
Goal: 
To understand the relationship between URLs and IP addresses, observe data packet flow, and interpret basic statistics related to Internet protocols using command-line tools.

![[rnyub.png]]
**Output Details:**

- **DNS Resolution:**
        - **coursera.org [54.192.171.22]**
        - The domain name coursera.org resolves to the IP address 54.192.171.22. 
    
- **ICMP Packets:**
    - Each line shows the details of the ICMP Echo Reply packets received:
        
        - **bytes=32:** The size of each ICMP packet sent and received is 32 bytes.
            
        - **time=9ms, 28ms, 14ms, 8ms:** These are the round-trip times (RTT) it took for the packet to travel from your computer to the server and back, measured in milliseconds.
            
        - **TTL=246:** The Time-to-Live value of the packet. This value decreases as the packet passes through network hops (routers). It gives an idea of the network's distance.
		 ![[dwioi.png]]
    
- **Ping Statistics:**
    
    - **Packets**:
        - **Sent = 4, Received = 4, Lost = 0 (0% loss):** Four packets were sent, and all four were received. There was no packet loss, indicating a stable connection to the server.
    
- **Approximate Round Trip Times:**
    
    - **Minimum = 8ms:** The fastest time for a packet to complete a round trip.
        
    - **Maximum = 28ms:** The slowest time for a round trip.
        
    - **Average = 14ms:** The average time of all four round trips.
    

**Key Takeaways:**

- The ping command is a simple yet powerful tool to explore Internet protocols.
    
- DNS resolution is crucial for converting user-friendly domain names into IP addresses.
    
- Packet statistics provide insight into network health and performance, such as latency and reliability.