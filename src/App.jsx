import { useState } from "react";
import PostList from "./PostList";

function App() {
  const [posts] = useState([
    { id: 1, title: "Intro to React", content: "React is a popular JavaScript library developed by Facebook for building fast and interactive user interfaces, especially for single-page applications. It uses a component-based architecture, allowing developers to break the UI into reusable pieces. React uses a virtual DOM to efficiently update and render components when data changes. With JSX, it combines HTML-like syntax with JavaScript logic, making UI code easier to understand. React also supports powerful features like hooks, context API, and state management. It’s widely used in modern web development and forms the frontend part of the MERN stack. React enhances scalability, performance, and code maintainability." },
    { id: 2, title: "Using Hooks", content: "React Hooks are special functions that let you use state and other React features in functional components. Introduced in React 16.8, Hooks make it possible to manage component state, perform side effects, and share logic without writing class components. Commonly used Hooks include useState for state management, useEffect for handling side effects like API calls, and useContext for accessing context without prop drilling. Hooks simplify code, improve readability, and promote reusable logic. They have become an essential part of modern React development, making functional components more powerful and flexible than ever before." },
    { id: 3, title: "JSX Guide", content: "JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows developers to write HTML-like code directly within JavaScript, making the code more readable and expressive. With JSX, you can embed dynamic values using curly braces {} and build complex UIs using components. Although browsers don’t understand JSX directly, tools like Babel transpile it into standard JavaScript. JSX makes the structure of components easier to visualize and helps blend logic and layout in a clean and intuitive way. It's one of the key reasons React development feels seamless." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{textAlign:"center"}} >Blog Post Viewer</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{ display: "block", margin: "0 auto" }}
      />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
