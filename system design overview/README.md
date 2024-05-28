
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [System Design Primer: The Ultimate Guide](#system-design-primer-the-ultimate-guide)
  - [Understanding System Design](#understanding-system-design)
  - [Exploring Essential Design Methods in System Design](#exploring-essential-design-methods-in-system-design)
    - [1. Architectural Design](#1-architectural-design)
    - [2. ERD Diagram(entity relationship diagrams)](#2-erd-diagramentity-relationship-diagrams)
    - [Uml Diagram(unified modelling language)](#uml-diagramunified-modelling-language)
    - [4. Class Diagrams](#4-class-diagrams)
    - [Sequence Diagrams](#sequence-diagrams)
  - [System Design Concepts](#system-design-concepts)
    - [1. Performance vs Scalability](#1-performance-vs-scalability)
    - [2. Latency vs Throughput](#2-latency-vs-throughput)
    - [3. Consistency Patterns and Availability Patterns](#3-consistency-patterns-and-availability-patterns)
    - [Consistency Patterns](#consistency-patterns)
    - [Availability Patterns](#availability-patterns)
  - [Advanced Concepts in System Design](#advanced-concepts-in-system-design)
    - [1. CDN(CDN stands for the content delivery network)](#1-cdncdn-stands-for-the-content-delivery-network)
    - [2. DNS(The DNS stands for the domain name system.)](#2-dnsthe-dns-stands-for-the-domain-name-system)
    - [3. Caching](#3-caching)
    - [4. Proxies](#4-proxies)
  - [Components of System Design](#components-of-system-design)
    - [1. Microservices and Service Discovery](#1-microservices-and-service-discovery)
    - [2. Database Systems: RDBMS and NoSQL](#2-database-systems-rdbms-and-nosql)
      - [RDBMS(The RDBMS stands for the relational database management system.)](#rdbmsthe-rdbms-stands-for-the-relational-database-management-system)
        - [characteristics of the RDBMS database.](#characteristics-of-the-rdbms-database)
      - [NoSQL](#nosql)
        - [characteristics of the NoSQL database.](#characteristics-of-the-nosql-database)
    - [3. Communication Protocols](#3-communication-protocols)
        - [examples of communication protocols.](#examples-of-communication-protocols)
  - [Approaching System Design Interview Questions](#approaching-system-design-interview-questions)
    - [step-gy step](#step-gy-step)
      - [1. Requirements clarification](#1-requirements-clarification)
      - [2. Estimation of resources](#2-estimation-of-resources)
      - [System interface definition](#system-interface-definition)
      - [4. Defining Data model](#4-defining-data-model)
      - [5. High-level design](#5-high-level-design)
      - [6. Detailed design](#6-detailed-design)
      - [7. Identifying and resolving bottlenecks](#7-identifying-and-resolving-bottlenecks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# System Design Primer: The Ultimate Guide
Dive deep into system design with our System Design Primer ultimate guide. From beginners to experienced professionals, we've got resources to elevate your skills. 
<img src="image 1.webp" alt="system overview"> 

## Understanding System Design
System design is a step-by-step process of defining a particular software's architecture, modules, components, etc. It is a base concept in software engineering and is vital in building scalable and reliable software.

it becomes essential to learn and clear all concepts of the system design. This system design primer helps you to understand the essence of system design and various concepts from basic to advanced. In the last of the guide, I've provided the tips and resources to prepare for your next system design interview.


## Exploring Essential Design Methods in System Design
The system design contains a wide range of design methods and techniques to design the system's architecture. Developers are required to choose a particular method based on the project's requirements.

### 1. Architectural Design
The architectural design is the base of the system design. It describes the infrastructure, model, view, components, and interaction.

The architectural design includes client-server interaction, microservices, etc.

### 2. ERD Diagram(entity relationship diagrams)
In the ERD diagram, you can define multiple database schemas, add entities in each schema, and add multiple attributes for each entity. Also, you can connect the entities of two different schemas if a relationship exists between them.

### Uml Diagram(unified modelling language)
t contains different diagrams like activity diagrams, class diagrams, sequence diagrams, etc., to represent the different aspects of the system.

### 4. Class Diagrams
Basically, the class diagram provides an overview of the system's data and functionality

### Sequence Diagrams
The sequence diagrams represent the interaction between the various components of the system. It is used to model the behavior of the system.Example:how the application should process the data, and return the response.

##  System Design Concepts
 
 ### 1. Performance vs Scalability 
 **Performance:**  If the loading time of your website is longer, traffic can decrease as visitors prefer to go to other websites. Various mechanisms like caching can be used to increase the application's performance and serve resources faster.


**Scalability:** You can scale your application by distributing the load across multiple servers or increasing the single server's capacity.

### 2. Latency vs Throughput
The latency and throughput affect the efficiency of the system.

**Latency:** In simple words, latency is a network delay that occurs due to Geographical distance, transport protocol, or network infrastructure. It is measured in the Milliseconds.

**Throughput:** On the other hand, throughput is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time.It is measured in megabytes (MB) per second. 

### 3. Consistency Patterns and Availability Patterns

**Consistency:** Consistency ensures that all nodes in the system read the same data at a particular time.

**Availability:** The system's availability ensures that each request receives a response either with fresh or old data. The availability is important when high uptime is needed.

### Consistency Patterns
**Strong consistency:** Strong consistency ensures that each request should get the most recent data. To achieve strong consistency, you require synchronized communication. It prioritizes consistency over availability.
**Eventual Consistency:** Eventual consistency allows temporary inconsistencies to be resolved soon. It prioritizes availability over consistency
**Weak Consistency:** In the weak consistency pattern, the user may get fresh data after writing the data. It focuses on the fast access. It can be used in live streaming or video chat.
### Availability Patterns
**Load Balancing:** The upcoming request can be distributed across multiple servers to achieve high availability. As we balance the load here, it is called the load balancing.

**Retry and timeout strategies:** You can implement the retry mechanism to process the request after every interval if the system fails or is not available. For example, if you didn’t get a response on any website, you may refresh it and get a response.

## Advanced Concepts in System Design
### 1. CDN(CDN stands for the content delivery network)
 The CDN is a distributed server network located at different geo-locations. The CDN is used to deliver content like images, various data, etc., from the server.

When users request a particular resource, the application requests the nearest server. If the nearest server has cached resources already, it serves it directly. Otherwise, it requests the origin server, caches the resources, and delivers them to the users. Next time, when the server gets a request for the same resource, it will return the cached resources.

### 2. DNS(The DNS stands for the domain name system.)
 The DNS system allows users to access the website and its resources using the domain name (e.g., www.example.com). It maps the unique domain name with a unique IP address. 
### 3. Caching
Caching is a mechanism to serve resources faster. It is also called high-speed storage. It works between the web application and the source of the data.

For example, when you make a request for some data, the application checks first in the cache storage. If data exists in the cache storage, it returns the data. Otherwise, it requests the database or source of the data, stores it in the cache storage, and sends data to the application.

***Did you know?: Cookies are used to cache data in your browser.***

### 4. Proxies

The proxy is also called the proxy server. The proxy server works between the client of the application and the internet. Whenever you request to get resources from the internet, the application requests the proxy server, and the proxy server gets resources and sends them back to the application.

***The proxy servers are used for the caching.***



## Components of System Design


### 1. Microservices and Service Discovery
Microservices architecture is one of the most used system design approaches to prepare software architecture. The microservices break down complex applications into small services, such that each service works independently and accomplishes specific tasks.

**Service Identification:** Every microservice has a unique ID and name for its identification.
**Dynamic Service Discovery:** Each microservice can dynamically find other services located in the same network. So, scaling and load balancing become easy.
### 2. Database Systems: RDBMS and NoSQL
Choosing the right database is important in the system design. There are two primary categories of the database: RDBMS and NoSQL.

#### RDBMS(The RDBMS stands for the relational database management system.)
 The SQL databases are built on the top of the RDBMS. When you need to store structured data, you can choose the RDBMS for the software or application. It makes it easier to access the data from the database and connect it with other data as they are stored in the table format.

##### characteristics of the RDBMS database.
<ol>
<li>It stores the data in the table format.</li>
<li>You can’t scale the RDBMS database horizontally, but you can scale it vertically.</li>
<li>SQL is a query language for the RDBMS databases.</li>
<li>Accessing data from the RDBMS database is slow.</li>
</ol>


#### NoSQL
The NoSQL database means a non-SQL database. It stores the data in the key-value pair instead of in table format. You can use the NoSQL database when you are required to store unstructured data in the database.

##### characteristics of the NoSQL database.
<ul>
<li>It stores the data in the key-value pair format.</li>
<li>NoSQL database is horizontally scalable, as you can add new key-value pairs for new attributes.</li>
<li>Each record can contain different key-value pairs.</li>
<li>It is faster than RDBMS databases.</li>
<li>It supports frequent changes in the database.</li>
</ul>





### 3. Communication Protocols
Protocols mean rules and communication protocols refer to the rules to communicate or exchange the data between two systems. The systems can also be server and client.

##### examples of communication protocols.

**HTTP/HTTPS(hypertext transfer protocol)** . HTTPS is a secure version of HTTP. They are used in web-based communication. It is a good idea to use HTTPS always for security reasons.

**TCP/IP(transmission control protocol.)** The TCP protocol is used to communicate over the internet. For example, it is used in the chatting application.

**UDP(user datagram protocol.)**  It is mainly used for live streaming, video calls, etc., in which data loss can be tolerable.

**WebSockets:** The web sockets are used for bi-directional duplex communication. It builds the connection between two web applications.

## Approaching System Design Interview Questions
### step-gy step
#### 1. Requirements clarification
Before you prepare a system design for any software, it is important to know the requirements.There can be two types of requirements: function requirements and non-function requirements.

**Function requirements:**The functional requirements are the requirements in the application with which the user interacts. For example, authentication, navigation, payment services integration, etc.

**Non-function requirements:** The non-functional requirements are the requirements to improve the application's capabilities. For example, high availability, scalability, consistency, low latency, high throughput, etc., are the non-functional requirements.



#### 2. Estimation of resources
The next step is deciding what kind of resources you should use to build the application.

For example, while selecting the resources for the server, you should keep in mind how how many requests it will receive per day or second.

Furthermore, you are also required to decide how much data you require to store in the database.

#### System interface definition
The third step is designing the system interface. For example, defining the API endpoints and what to expect from each API endpoint.


#### 4. Defining Data model

If you need to store the structured data and tables are pre-determined, you can use the relational database. For storing the unstructured data, you should use NoSQL databases like MongoDB.

If you are building social media applications like Facebook or Twitter, you can easily use Graph databases to manage many-to-many relationships.

#### 5. High-level design

In this step, you need to decide how you will connect the components of the system with each other. For example, connecting the server with the database, connecting the server with the client, and integrating the third-party tools with the applications.

In this step, you can fulfill the functional requirements of the application.

#### 6. Detailed design
After creating the basic design of the application, you need to improve the system design. You need to analyze the system to fulfill the non-functional requirements.

You can analyze it as given below.
<ul>
<li>How to use caching to improve the performance of the application?</li>
<li>How do we scale the application via load balancing?</li>
<li>Should you use the CDN for caching, or are cookies enough?</li>
<li>How would you handle the failure of the application?</li>
<li>Should you distribute the data across multiple databases</li>
<li>How will you replicate the database?</li>
</ul>

?




#### 7. Identifying and resolving bottlenecks
At last, you should identify the bottlenecks in your system design and discuss the solutions to resolve them with the interviewer.

The sample bottlenecks can be shown below.
<ol>
<li>Can the system fail in any scenario? If yes, how will you handle it?</li>
<li>How do you monitor the performance of the system and issues in the system?</li>
<li>Do you have enough replicas of the database to handle the failure?</li>
</ol>





Let’s look at the below system design interview questions. So you can easily crack the interviews for your dream job.
<ul>
<li>How would you design a URL Shortening service similar to TinyURL?</li>
<li>How would you design a Web Crawler?</li>
<li>How would you design Facebook and Instagram?</li>
<li>. How would you design the API rate limit?</li>
</ul>


<p>for the full blog visit<a href="https://www.designgurus.io/blog/system-design-primer-the-ultimate-guide">https://www.designgurus.io/blog/system-design-primer-the-ultimate-guide</a></p>

 



