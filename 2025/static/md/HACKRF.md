# Introduction to HackRF

![alt text](images/hackrf_one_bg.jpg)

The HackRF is a half-duplex sdr transceiver designed for RF investigation. It has an operating frequency of 1Mhz - 6Ghz with a 8-bit quadrature sample rate. The hackrf has a maximun transmition power of 30mW this makes it suitable for transmittion at close ranges but it prone to emission of sperodic emissions which could compromise nearby equipment if used with amplification equipment. The HackRF is compatable with GNU-Radio allowing it be calibrated to work with multiple other equipment and protocols. One of the main disadvatages of the HackRF is its subpar receive perfomance . In our case we added a Temprature Compensated Crystal Oscillator (TCXO) to the HackRF to increase the receive performance to minimise frequency drift while receiving for long periods from time.


____


## History of HackRF

With the advancement in internet technology in the last 30 years , a new market of devices has emerged that combine the use of the internet and sensors to exchange information between them in a meaningful way. These devices are called Internet of Things or in short IoT . The mass marketing and adoption of these devices has made easily available to many people which implement them in their home without proper infustractior with many of them being vulnerable to low level attacks. There have been studies and testing done on IoT devices in regards to network penetration testing but there is a lack of research in the field of Radio Frequency. The increase in IoT device attacks has surge drastically in the past few years , specifically in 2019 there was a record of 2.9 Billion attacks collected by honey pots on IoT devices. That was a 300% increase in attacks in comparison to the previous year where there where only 819 Million attacks.

It all began in June 2012 with Michael Ossmann’s post ‘Introducing HackRF’ where he presented his idea for a cheap, open source Software Defined Radio (SDR) to spread the adoption of SDR in hacker and research communities. The associated website is [greatscottgadgets](https://greatscottgadgets.com/hackrf/) .

![alt text](images/gsg.jpg)

### **The Origins: HackRF Jawbreaker**

A first prototype of a HackRF board is called ‘**HackRF Jawbreaker**’ that was presented at the GRCon12 in late September 2012.
The initial prototype, known as HackRF Jawbreaker, was planned for distribution at ToorCon 14 in late 2012. When manufacturing delays hit, attendees at ToorCon 14 and GRCon12 received beta codes instead. By early 2013, beta manufacturing began, and in May 2013, over 500 Jawbreaker units were produced, with final shipments completing in June after extensive testing.

### **The Breakthrough: Kickstarter Success**

2013 marked a pivotal moment when Ossmann launched a [Kickstarter campaign](https://www.kickstarter.com/projects/mossmann/hackrf-an-open-source-sdr-platform/faqs) for HackRF One. The campaign resonated deeply with the community, demonstrating the massive demand for accessible SDR technology. This crowdfunding success not only validated the concept but also helped establish HackRF as a community-driven project.

### **HackRF One: Technical Innovation**

HackRF One emerged as a half-duplex transceiver operating from 1 MHz to 6 GHz, featuring an open-source hardware design and USB connectivity. With its 20 million samples per second capability, users could transmit or receive signals across most common wireless protocols through a single USB connection.

### **Evolution and Ecosystem**

The platform continued to evolve with additions like the PortaPack, an add-on display and interface module that transformed HackRF One into a standalone device. This expansion helped create a rich ecosystem of tools and applications, further cementing HackRF's position in the SDR community.

-----


## Types of HackRF

**HackRF Jawbreaker**
![alt text](images/JAWBREAKER.png)
HackRF Jawbreaker marked the beginning of the project in 2012-2013, serving as the initial prototype with a limited production run of approximately 500 units that proved the concept's viability.

**HackRF One**
![alt text](images/hackrfone.png)
The HackRF One, introduced in 2013, became the main production version and continues to be manufactured today, featuring significant improvements over the Jawbreaker design and establishing itself as the standard model.

**HackRF One + PortaPack H1**
![alt text](images/h1.png)
The HackRF One with PortaPack H1 transformed the basic HackRF One by adding a display module that enabled standalone operation without a computer, featuring an LCD touchscreen interface and built-in battery support for portable use.

**HackRF One + PortaPack H2**
![alt text](images/h2.png)
The HackRF One with PortaPack H2 represents the latest evolution, building upon the H1's foundation with an improved display, enhanced interface, and more capable firmware to deliver a more refined user experience.

---


### RF Scanning Softwares

1. [SDR++](https://github.com/AlexandreRouma/SDRPlusPlus)
2. [hackrf-spectrum-analyzer](https://github.com/pavsa/hackrf-spectrum-analyzer)
3. [qSpectrumAnalyzer](https://github.com/xmikos/qspectrumanalyzer)



## Attacks using HackRF

### **Jamming**

Radio Frequency (RF) jamming refers to the intentional interference of RF communications by transmitting disruptive signals at the same frequency. This interference is commonly used to prevent devices from communicating, either for benign purposes (such as defense) or maliciously.

**Signal Jamming:** HackRF allows custom jamming experiments by setting it to specific frequencies, testing susceptibility and interference resistance.

**Types of Jamming:** HackRF supports various jamming methods, such as spot jamming, barrage jamming, and sweep jamming, depending on the target and objective.

- **Spot Jamming**: Concentrates on one specific frequency. This is effective but can be limited in scope.
  - **Example**: Blocking a single radio station or communication channel.
  
- **Sweep Jamming**: Moves across a range of frequencies in a sweeping motion, affecting multiple channels over time.
  - **Example**: Disrupting all communication channels within a defined range.


- **Barrage Jamming**: Simultaneously jams multiple frequencies, making it difficult for devices within the range to communicate effectively.
  - **Example**: Affecting Wi-Fi and cellular signals together in an area.


- **Pulse Jamming**: Uses short bursts of energy to interfere with the signal. The bursts are timed to impact signals at intervals.
  - **Example**: Pulse jamming in military operations to temporarily disable communication.

- **Deceptive Jamming**: Sends signals that mimic legitimate communications, confusing the receiving device.
  - **Example**: Using deceptive jamming to send false location data in GPS devices.
 
### **Reply attacks**
Replay attacks are a type of cyberattack where an attacker intercepts and records a communication or data transmission and replays it later to deceive the receiving system. These attacks exploit the lack of proper authentication or session management in protocols. The replayed transmission appears legitimate to the receiver, allowing unauthorized access or actions.

 **How Replay Attack Works:**

1. **Interception**: The attacker captures a communication or signal, such as a car key fob unlocking signal, login credentials, or authentication tokens.

2. **Storage**: The attacker stores the captured data for future use.

3. **Replay**: At a later time, the attacker retransmits the captured data to the target system, impersonating the original sender.

4. **Execution**: The target system processes the replayed data, believing it to be genuine, granting access or executing actions.

### **GSM HACKING**
#### What is GSM
GSM (Global System for Mobile Communications) is a digital mobile network that is widely used around the world. It operates across four different frequency bands: 850 MHz, 900 MHz, 1800 MHz, and 1900 MHz. GSM uses a combination of Frequency Division Multiple Access (FDMA) and Time Division Multiple Access (TDMA) to efficiently utilize these frequency bands.

GSM sniffing is a method used to intercept and decode the communication between mobile devices and cellular networks.

#### IMSI Catcher
An IMSI Catcher, also known as an International Mobile Subscriber Identity catcher, is a device that intercepts mobile phone communications and tracks the location data of mobile phone users. It operates by posing as a fake mobile phone tower, creating a connection between the target mobile phone and the service provider’s actual towers, making it a man-in-the-middle (MITM) attack.While 3G or 4G wireless cellular networks require mutual authentication from both the handset and the network, sophisticated IMSI catchers may have the capability to downgrade 3G and LTE to non-LTE network services. These services do not require mutual authentication, making them vulnerable to interception.

### **Spoofing GPS Coordinates**

GPS (Global Positioning System) has become an integral part of modern life. Whether we are using smartphones for navigation, tracking devices, or even autonomous systems, GPS coordinates provide a crucial service for determining precise locations. However, like all technologies, GPS is not foolproof and can be manipulated. One advanced technique used to deceive GPS receivers is GPS Spoofing. This technique tricks the receiver into believing it's at a false location.

#### What is GPS Spoofing?
GPS spoofing involves the transmission of fake GPS signals to deceive GPS receivers into believing they are at a different location than they actually are. Unlike GPS jamming, which blocks GPS signals entirely, spoofing works by overriding real signals with fabricated ones. This technique can fool a GPS receiver into calculating a false location or time.

### Side channel attack

Capturing RF signals can give out information about what the device is currently doing, and computer monitors are no exception for this issue. Using a software called TempestSDR, it is possible to recreate a black and white live image of what a screen is displaying thanks to the RF signals that the HDMI cable is leaking. 

