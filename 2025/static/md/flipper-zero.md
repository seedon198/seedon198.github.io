# ﻿FLIPPER ZERO

### Sub GHz Module

### What is Sub GHz?

### The frequency range is below 1GHz.

### Operates typically between 300MHz-1GHz

### Where is it used?

Real world examples:

1. Smart homes: Remote controls, garage door openers, smoke alarms, motion sensors. Home automation, security systems, and energy management.
1. Logistics and Asset Tracking Devices: GPS trackers, RFID tags, vehicle monitoring systems, Walkie Talkie. etc.

Why is it used?

It is used generally for wireless communication, where low power consumption and higher ranges are required.

The range may exceed depending upon the hardware strength and obstacles. It can easily reach several hundreds of meters indoors and depending on the conditions, several kilometers outdoors; whereas, the maximum range of WiFi or Bluetooth 2.4 GHz wireless transmitter can be up to 200 meters indoors and 400 meters outdoors.

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot1.png)

2\.Compatible protocols (433MHz, 315MHz, etc.)

300–450 MHz: Common in industrial and military applications.

433 MHz (ISM Band): Widely used in Europe for *ISM* devices.

868 MHz (ISM Band): Used primarily in Europe for IoT devices, such as LoRaWAN and Zigbee.

915 MHz (ISM Band): Primarily used in North America for similar applications as 868 MHz.

These sub-GHz frequencies are favoured for their ability to penetrate obstacles (like walls) and support longer range communication compared to higher frequency bands, such as those used in Wi-Fi or Bluetooth.

*ISM (Industrial, Scientific, and Medical)*

Step-by-step guide on capturing and replaying signals:

Update the firmware and other: Make sure the flipper zero is in active state and the signal transmitter is working as well.

In my case I have taken a car key finder/locator. Which will be sending the signals in the Sub-GHz range.

Go through the Menu button of flipper zero, the central, circular button.

**OK button:** launching apps and confirming the selection. Select the **Sub-GHz** option there.

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot2.jpeg)

Go for **Read Raw** option. There flipper zero captures the signal within its supported Sub-GHz range.![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot3.jpeg)

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot4.jpeg)

Start sending the signals from the remote/transmitter. It will show some graphical view, once it has received the signals.

Stop the signal and there you capture the signal for further use. Now you can also **Send** the signal using replaying it.

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot5.jpeg)

Save the captured signal by naming the file.

Analyzing part: Some signals may use rolling codes, which change every time a button is pressed. Replaying these signals as-is will not work. For such cases, we need to figure it out, whether they are using the rolling codes or not.Tools like Universal Radio Hacker (URH) can help in this.

Replay the Sub-GHz Signal

1. **Navigate to the Saved Signal**:
   1. Open the **Sub-GHz** app on your Flipper Zero.
   1. Select **Saved Signals** and locate the file you captured earlier.
1. **Replay the Signal**:
- Select the signal and choose **Replay**.
- Hold the Flipper Zero near the receiver device (like here the car doors/sensors/lights/sound).![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot6.jpeg)
- The signal will be transmitted, replicating the effect of the original remote.
- Observe the response of the target device.
- If it works, the device should respond as if the original remote was used.

Frequency Analyzer:

**What a Frequency Analyzer Does on Flipper Zero**

1. **Scan for Active Frequencies**:
   1. The Flipper Zero listens for RF activity across a specific frequency range (e.g., 300 MHz to 928 MHz for Sub-GHz).
   1. It identifies frequencies where signals are present.
1. **Display Signal Peaks**:
   1. The results are shown as a graph or list, with frequency peaks indicating detected signals.
   1. Each peak represents a frequency where an active transmission has been detected.
1. **Assist in Signal Capture**: By identifying the frequency of a signal, users can focus their efforts on capturing or analyzing the transmission (e.g., a remote control signal at 433.92 MHz).

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot7.jpeg)

**How to Use the Frequency Analyzer on Flipper Zero**

1. Navigate to the **Sub-GHz** application (here our remote) on the Flipper Zero.
1. Select **Frequency Analyzer** or a similar option (depending on firmware).
1. Start the scan.
   1. The Flipper will sweep through the Sub-GHz spectrum and display active frequencies.
1. Observe the results:
- Peaks indicate active frequencies.
- The detected frequencies can guide you to capture and analyze a specific signal.

**Applications of Frequency Analyzer in Flipper Zero**

1. **Detecting Signal Sources**: Find the operating frequency of devices like remotes or wireless sensors.
1. **Spectrum Awareness**: Understand which parts of the spectrum are busy or clear in your area.
1. **Preparation for Signal Capture**: Identify frequencies to focus on for capturing and replaying signals.
1. **Troubleshooting**: Diagnose issues with RF devices by checking if they transmit correctly.

When using the Frequency Analyzer feature of the Flipper Zero, it provides four key values because these are essential parameters to characterize and understand the detected signal. Here’s what these values represent and why they are displayed:

1. **Frequency**

What it is: The central frequency of the detected signal, measured in MHz (e.g., 433.92 MHz).

- Why it matters:

Identifies the specific part of the RF spectrum where the signal is active.

Helps pinpoint the frequency used by a device for communication.

Essential for capturing or replaying the signal accurately.

2. **Modulation**

What it is: The method used to encode data onto the carrier wave, such as: Amplitude Shift Keying (ASK): Modulates the amplitude of the signal. Frequency Shift Keying (FSK): Modulates the frequency.

Why it matters:

Different devices use different modulation types, and knowing this allows for proper decoding and replay.

Incorrect modulation settings can result in misinterpreted signals.

3. **Signal Strength (RSSI - Received Signal Strength Indicator)**

What it is: A measure of how strong the signal is, usually displayed as a negative value (e.g., -30 dBm, where closer to 0 means stronger signal).

Why it matters:

Indicates the proximity or power of the signal source.

Helps users determine if the source is nearby or far away.

Useful for troubleshooting (e.g., weak signals may require closer capture or an external antenna).

(Here you can set the threshold of RSSI) below that, the signals will be filtered. Hence giving you clear value and view. Other settings also you can customize here in **Config** option)

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot8.jpeg)

4. **Activity**

What it is: A representation of how active the signal is, often shown as bursts or peaks.

Why it matters:

Indicates whether the detected signal is intermittent (like a button press) or continuous (like a sensor transmitting regularly).

Helps decide the timing for capturing transient signals (e.g., pressing a remote button during the detection window).

Why the Flipper Zero Displays These Values The frequency analyzer provides these values to:

1. Guide Signal Capture: Knowing the frequency and modulation type ensures accurate settings for capturing and replaying signals.
1. Characterize the Environment: Users can identify all active signals in their vicinity and their characteristics.
1. Assist with Troubleshooting: Signal strength and activity insights help diagnose issues with devices or interference sources.

Example of Using Frequency Analyzer Values

1. Device: A wireless remote operating on 433.92 MHz.
1. Detected Values:
   1. Frequency: 433.889 MHz.
   1. Modulation: ASK.
   1. Signal Strength: -40 dBm (strong).
   1. Activity: Intermittent bursts.
1. Next Steps:
- Use the Flipper Zero’s Sub-GHz app to capture the signal with the detected parameters.
- Replay the captured signal to mimic the remote.

By providing these four values, the Flipper Zero’s frequency analyzer simplifies the process of identifying and working with RF signals in the Sub-GHz spectrum.

![](https://raw.githubusercontent.com/seedon198/seedon198.github.io/refs/heads/master/static/media/blogs/FLIPPER%20ZERO/screenshot9.jpeg)

Safety and legal considerations:

1. Follow local laws for RF signal use to avoid legal issues.
1. Avoid interfering with critical communication systems.
1. Do not replay signals without proper authorization.
1. Protect sensitive information and respect privacy.
1. Use RF tools ethically and responsibly.
