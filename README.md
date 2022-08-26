<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Discord Dice Bot</h1>

  <p align="center">
    A discord bot that rolls an infinite amount of dice with an infinite amount of sides
    <br />
    <br />
    <a href="https://github.com/ryandougc/dnd-dice-bot">View Demo</a>
    ·
    <a href="https://github.com/ryandougc/dnd-dice-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/ryandougc/dnd-dice-bot/issues">Request Feature</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

A discord bot that lets you roll any amount of dice with any amount of sides. Optionally add modifiers to your roll.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Discord][Discord.com]][Discord-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You will need the following to start development on this bot:
* Node.js
* Npm
* Discord Bot

You can visit the <a href="https://discordjs.guide/#before-you-begin">Discord.js Documentation</a> for step-by-step instructions on how to get setup

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ryandougc/dnd-dice-bot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Duplicate the `sample.env` file and rename it to `.env`
4. Enter your Discord bot token and client id into the `.env` file in the respective spots
   ```txt
   DISCORD_API_TOKEN=<place token here>
   DISCORD_CLIENT_ID=<place client id here>
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

In the Discord server chat where your bot has been added, use the following command:

/roll <number of dice> <number of faces> <!optional: modifier>

  - **number of dice** -
    Enter in how many rolls of a die should happen
    
  - **number of faces** -
    Enter the number of faces the die should have
    
  - **modifier** - (optional) 
    Numbers to add to the sum of the roll. Can be positive or negative

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Purvit - [@purvitgupta](https://github.com/purvitgupta)

Ryan - [@ryanvoiture](https://twitter.com/ryanvoiture) - hello@ryancarr.ca

Project Link: [https://github.com/ryandougc/dnd-dice-bot](https://github.com/ryandougc/dnd-dice-bot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ryandougc/dnd-dice-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/ryandougc/dnd-dice-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ryandougc/dnd-dice-bot.svg?style=for-the-badge
[forks-url]: https://github.com/ryandougc/dnd-dice-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/ryandougc/dnd-dice-bot.svg?style=for-the-badge
[stars-url]: https://github.com/ryandougc/dnd-dice-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/ryandougc/dnd-dice-bot.svg?style=for-the-badge
[issues-url]: https://github.com/ryandougc/dnd-dice-bot/issues
[license-shield]: https://img.shields.io/github/license/ryandougc/dnd-dice-bot.svg?style=for-the-badge
[license-url]: https://github.com/ryandougc/dnd-dice-bot/blob/master/LICENSE.txt
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[Discord.com]: https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white
[Discord-url]: https://discord.com/
