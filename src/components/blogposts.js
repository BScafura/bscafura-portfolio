const blogposts = [
  {
    id: 1,
    title: "Building My Own Pokédex: A Journey with Subvisual",
    subtitle: "how I took on a challenge to build my own Pokédex",
    tags: ["#daily", "#react.js", "#javascript", "#project"],
    avatar: (
      <img
        className="post-avatar-img"
        src={process.env.PUBLIC_URL + "/avatar.jpg"}
        alt="avatar"
      />
    ),
    author: "Breno Scafura",
    date: "10-10-2024",
    img: (
      <img
        className="post-img"
        src={process.env.PUBLIC_URL + "/post1.gif"}
        alt="post1"
      />
    ),
    previewimg: (
      <img
        className="img-preview"
        src={process.env.PUBLIC_URL + "/post1.gif"}
        alt="post1"
      />
    ),
    post: (
      <div className="blog-post">
        {" "}
        <p style={{ fontWeight: "bold" }}>Hey there! 👋</p>
        <p>
          I’m thrilled to share an exciting challenge I recently took
          on—building a Pokédex using React.js and the PokéAPI. This adventure
          was part of an incredible opportunity provided by Subvisual, where I
          get to push my coding skills to new heights through their
          Apprenticeship Program. This project, covering the first five regions
          of Pokémon mythology—Kanto, Johto, Hoenn, Sinnoh, and Unova—has been
          both a learning experience and a ton of fun"
        </p>
        <p style={{ fontWeight: "bold" }}>What I Built 🛠️</p>
        <p>
          This Pokédex is a web application where users can explore the iconic
          Pokémon from each region. It’s powered by JavaScript, Node.js, and
          React.js. By using the PokéAPI, I pulled data for hundreds of Pokémon
          and displayed them in an interactive and user-friendly way. The
          challenge wasn’t just about displaying names and images but also
          handling complex data structures and creating a smooth user
          experience.
        </p>
        <p>
          Feel free to check out the{" "}
          <a href="https://github.com/BScafura/challenge-pokedex-subvisual">
            repository
          </a>
          , clone it, and run it locally. Detailed setup instructions are
          available in the README file. I hope you have as much fun exploring
          this Pokédex as I did building it! 😊
        </p>
        <p style={{ fontWeight: "bold" }}>Why This Challenge Mattered to Me</p>
        <p>
          Taking on this project wasn’t just about creating a cool app—it was
          about improving my skills as a software developer. Here’s how this
          exercise made me better:
        </p>
        <ul>
          <li>
            {" "}
            Real-World Problem Solving: Working with APIs like PokéAPI taught me
            how to manage data dynamically, especially when it comes to handling
            large datasets like Pokémon attributes.
          </li>
          <li>
            {" "}
            React Mastery: React.js was a key part of this challenge, and
            creating reusable components for different Pokémon regions sharpened
            my understanding of how to build efficient UIs.
          </li>
          <li>
            JavaScript Proficiency: I dove deeper into advanced JavaScript
            features and asynchronous programming, which are essential for
            making smooth, responsive web apps.
          </li>
        </ul>
        <p>
          It wasn’t just about writing code. I learned how to debug more
          efficiently, improve application performance, and pay attention to
          UI/UX design, ensuring the app wasn’t only functional but also
          enjoyable to use.
        </p>
        <p style={{ fontWeight: "bold" }}>
          The Excitement of Learning at Subvisual 🎯
        </p>
        <p>
          What makes this experience even more special is the learning
          environment at Subvisual. I’m excited to be part of their
          Apprenticeship Program, where learning and growth are at the
          forefront. At Subvisual, they believe in continuous learning and never
          assume that we know everything. There’s always something new to
          discover, and this Pokédex challenge is proof of that.
        </p>
        <p>
          I have access to real projects with real impact, online courses, and
          the freedom to create challenges that align with my personal goals.
          Plus, having a dedicated mentor to guide me through this journey is a
          game-changer. Together, we define my learning path, ensuring that I’m
          always working on projects that push my limits and help me grow as a
          developer. Why This Matters for My Career 🚀
        </p>
        <p>
          The opportunity Subvisual has given me is truly invaluable. Working on
          projects like the Pokédex has allowed me to:
        </p>
        <ul>
          <li>
            {" "}
            Build practical experience: Instead of just theoretical exercises,
            I’m building apps that real users can interact with.
          </li>
          <li>
            {" "}
            Collaborate with experts: The mentorship and collaborative spirit at
            Subvisual mean I’m constantly learning from seasoned developers.
          </li>
          <li>
            Grow professionally: I’m honing my technical skills while also
            learning how to tackle real-world problems—skills that will
            undoubtedly make me a better software developer.
          </li>
        </ul>
        <p>
          I’m incredibly grateful to Subvisual for trusting me with such
          exciting projects and for fostering an environment where growth and
          continuous learning are part of the everyday experience.
        </p>
        <p style={{ fontWeight: "bold" }}>What’s Next?</p>
        <p>
          I can’t wait to dive deeper into this challenge and more projects that
          Subvisual has in store for me. Whether it’s experimenting with new
          frameworks or exploring emerging fields like Web3 and Blockchain, I
          know I’m in the right place to learn and grow.
        </p>
        <p>Gonna catch them all ✌️🚀</p>
        <p>Stay tuned for more updates from my journey as a developer.</p>
      </div>
    ),
  },
];

export default blogposts;
