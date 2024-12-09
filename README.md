<a id="readme-top"></a>

<h1 align="center">LiveDocs | Real-Time Collaborative Editing :card_index_dividers:</h1> 

<div align="center">

<img src="/public/assets/images/HomePage.png" alt="homepage">

<p align="center">LiveDocs is a powerful SaaS collaborative editor designed for seamless real-time collaboration. Built to replicate the intuitive functionality of Google Docs, it combines the latest web technologies to create an elegant, responsive, and efficient document editing experience.  
<br/>
<br/>
Whether you're a writer, editor, or part of a collaborative team, LiveDocs empowers you to create, share, and collaborate with ease!
<br />

<a href="https://livedocs-livid.vercel.app/">LiveDocs Live Link</a>



<br />
<a href="https://github.com/AmberForrester/live_docs">Source Code</a>
.
<a href="https://github.com/AmberForrester/live_docs/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md&title=">Report Bug</a>
.
<a href="https://github.com/AmberForrester/live_docs/issues/new?assignees=&labels=enhancement&projects=&template=feature-request-%F0%9F%9A%80.md&title=">Request Feature</a>
</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#steps-to-install">Steps to Install</a></li>
    <li><a href="#how-to-run-the-application">How to Run the Application</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />



## Features
- **Secure Authentication with Google:** Implemented user-friendly, secure sign-in and sign-out processes using NextAuth, ensuring robust session management and data privacy.
- **Real-Time Collaborative Editing:** Engineered seamless, simultaneous document editing for multiple users with instant updates, leveraging Liveblocks for cutting-edge real-time synchronization.
- **Comprehensive Document Management:** Developed intuitive features for document lifecycle management - 
  - Create New Documents: Enabled quick setup with auto-saving for uninterrupted productivity.
  - Delete Documents: Integrated secure deletion capabilities to maintain document control.
  - Advanced Sharing Options: Empowered users to share documents with customizable view and edit permissions via email or direct link.
  - Organized Document Listings: Designed clear navigation to access owned or shared documents efficiently.
- **In-Context Commenting:** Facilitated threaded discussions through inline and general comments, enhancing collaboration and feedback workflows.
- **Live Collaboration Indicators:** Visualized team activity with live presence indicators, offering real-time insights into collaborators' actions within the editor.
- **Smart Notifications System:** Built a responsive notification system to inform users about document updates, comments, and collaborator activities, ensuring everyone stays aligned.
- **Fully Responsive Design:** Created a fully responsive, adaptive interface with Tailwind CSS, enabling seamless usage across all devices, from desktop to mobile.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Project Structure

<img src="/public/assets/images/ProjectStructure.png" alt="Picture of the project structure in Visual Studio Code">

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Installation

### Prerequisites
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Node.js](https://nodejs.org/en)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lexical Editor](https://lexical.dev/)
- [Clerk](https://clerk.com/)
- [Liveblocks](https://liveblocks.io/)



### Steps to Install

Set up the project locally on your machine by following these steps. 
Keep in mind, they are specific to using Windows.

1. **Clone the Repository:**
  ```bash
  git clone https://github.com/AmberForrester/live_docs
  ```

2. **Navigate to the project directory:**
  ```bash
  cd live_docs
  ```

3. **Install Required Dependencies:** 

Run the following command to install the project dependencies using npm:
  ```bash
  npm install
  ```

4. **Set Up Environment Variables:**

Create a new file named `.env.local` in the root of your project directory and add the following:
   ```bash
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=

  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_OUT_URL=/sign-out

  NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
  LIVEBLOCKS_SECRET_KEY=
   ```

Use the key provided after creating your accounts and new projects with [Clerk](https://clerk.com/) and [Liveblocks](https://liveblocks.io/). 

5. **Add `.env.local` to `.gitignore`**

> [!CAUTION]
> To ensure your sensitive information does not get committed to version control:
  - Open (or create) the `.gitignore` file in the root directory.
  - Add the following line to the file:
   ```
   .env.local
   ```

This step will prevent the `.env.local` file from being tracked by Git and keep your sensitive credentials secure. 



### How to Run the Application

1. Open your terminal in the project directory and run the following command: 
   ```bash
   npm run dev
   ```

2. Paste `http://localhost:3000` in your browser to view the project.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



# Google Auth Sign-In
<img src="/public/assets/images/GoogleAuthSignIn.png" alt="google auth sign in">

# Manage User Access
<img src="/public/assets/images/ManageAccess.png" alt="manage access">

# Collaborative Editing in Real-Time
<img src="/public/assets/images/RealTimeCollabEdits.png" alt="collab edits in real time">

# Real-Time Notifications
<img src="/public/assets/images/Notifications.png" alt="real time notifications">

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Contributing

I have learned that contributions are the heart of what makes the open source community such an amazing place! We are constantly able to learn, grow, inspire eachother, and create incredible things. Any contributions you make are **greatly appreciated**, we are so lucky to be here together.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please, don"t forget to give the project a :star:! 

I appreciate you!

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Acknowledgments

Please take some time to check out the links below! I found value in each and every one of them while creating this project, so my hope is that you will to!

* [Google Docs Inspired project with Next.js 15](https://youtu.be/y5vE8y_f_OM?si=Ht2t95c5B0xghWUR) - Special thank you to _JavaScript Mastery_ for the tutorial!
* [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
* [ID Token Permissions with Next.js](https://liveblocks.io/docs/authentication/id-token/nextjs)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

> [!TIP]
> Supercharge your Next.js deployment process with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

<p align="right">(<a href="#readme-top">top of page</a>)</p>