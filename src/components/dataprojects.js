const dataprojects = [
  {
    id: 1,
    name: "eTickets",
    description:
      "This web application, developed with C# ASP.NET Core using the MVC architecture, employs Entity Framework for efficient data management and Identity Framework for secure user authentication. It features a comprehensive ticket booking system seamlessly integrated with PayPal for online payments. All data is stored in an external SQL database, ensuring reliability and scalability.",
    features: [
      "User Authentication: Secure user registration and login with role-based access control for administrators and clients.",
      "Administrator Area: Manage movies, showtimes, and user accounts through a user-friendly dashboard with full CRUD functionality.",
      "Client Area: Search for movies and actors with IntelliSense, view detailed movie pages, select seats, and purchase tickets.",
      "Online Payment: Secure PayPal integration for processing payments and instant email confirmations.",
    ],
    image: "🎞️",
    techs: ["Csharp", "ASPNETCore", "JavaScript", "CSS3", "SQL"],
    link: "https://github.com/BScafura/itickets-mvc",
    status: "finished",
  },
  {
    id: 2,
    name: "React.Js Pokedex",
    description:
      "This project was developed using React, a powerful JavaScript library for building user interfaces, as part of a challenge for the 2024 Apprenticeship Program. Leveraging the strengths of JavaScript, we aimed to build an interactive and dynamic Pokédex experience, showcasing our skills in modern web development. To fetch all the data we also used pokeapi.co. It's basically a dynamic single-page web application (SPA) that deliver information stored in the respective Pokémon API and show it to the user in a friendly and fun experience.",
    features: [
      "Search: Search for Pokémon  IntelliSense",
      "Detailed View: view detailed Pokémon pages with characteristics and base stats",
      "Pagination: Display 10 Pokémon per page, with a navigation bar for easy navigation",
    ],
    image: "📱",
    techs: ["JavaScript", "React", "CSS3"],
    link: "https://github.com/BScafura/challenge-pokedex-subvisual",
    status: "finished",
  },
  {
    id: 3,
    name: "Ticket Stock",
    description:
      "This platform simplifies the organization and sale of tickets for online events, enabling businesses to effortlessly create and manage experiences such as workshops, concerts, conferences, and festivals. By harnessing the power of Solana blockchain technology, we guarantee secure data storage and a transparent purchasing process for all users. With a user-friendly interface and built on cutting-edge technologies like Rust, TypeScript, React.js, and Next.js, our solution is designed for exceptional performance and scalability, ensuring a seamless experience for both event organizers and attendees.",
    features: [
      "Create Events: Effortlessly set up and manage a variety of events, including workshops, concerts, conferences, and festivals.",
      "Event Search: Easily discover events by category or location, allowing users to find relevant experiences nearby.",
      "NFT Ticket Sales: Sell tickets in NFT format, providing a secure and unique way for attendees to access events.",
      "NFT Stacking System: Engage your audience with an innovative NFT stacking system that enhances user experience and rewards participation.",
    ],
    image: "🪙🎟️",
    techs: ["Rust", "TypeScript", "React", "Next", "CSS3"],
    link: "https://github.com/BScafura/wba-builders-ticketstock",
    status: "ongoing",
  },
];

export default dataprojects;
