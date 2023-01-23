# Electron sandbox
<img width="700px" src="https://miro.medium.com/max/1400/1*0QaGui94CWnt_xM-B42Zhw.jpeg" alt="Electron and Next.js logos laid out horizontally." />

This sandbox was created with Electron, Next.js and TypeScript.

## Purpose
This sandbox was created to explore architectural setups for Electron and Next.js.

## The problem
Electron is an unipinionated platform, which can lead to confusion about best practices. 
</br>
Different opinions can clash and projects can stall as a result.

### Proposals
A small scale sandbox environment can assist in testing the basics for various approaches.

In this sandbox, the benefits of the following approaches will be compared and contrasted:
- Load all content in one window
- Create a main window with a single nested frame (known as a BrowserView)
- Develop a main window with multiple frames stacked like a deck of cards
- Display a tool bar and navigation tabs in the main window, and load one sub-app in one nested frame at a time
- Have the same setup as above but create multiple frames that stack like a deck of cards and display separate sub-apps
- Finally, continue with the same setup but only display one frame at a time but maintain the state for each sub-app in the background (idling)

The end product is enterprise business software, so accessibility, scalability and performance will be key metrics to assess the strength of each concept.

