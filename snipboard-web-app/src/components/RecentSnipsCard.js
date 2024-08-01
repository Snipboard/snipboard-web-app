import React from 'react';
import Snip from './Snip';

const RecentSnipsCard = () => {
  // Placeholder data for recent snips
  const recentSnips = [
    { id: 1, title: 'Creating a react component', description: 'Creating a react component using functional component syntax.', codeSnippet: 'const App = () => { return <div>Hello, world!</div>; };', language: 'javascript' },
    { id: 2, title: 'Triple nested for loop example', description: 'A triple nested for loop in JavaScript.', codeSnippet: 'for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { for (let k = 0; k < 3; k++) { console.log(`i: ${i}, j: ${j}, k: ${k}`); } } }', language: 'javascript' },
    { id: 3, title: 'Handling form submissions', description: 'Handling form submissions in React using controlled components.', codeSnippet: 'const [formData, setFormData] = useState({ email: "", password: "" });', language: 'javascript' },
];

  return (
    <div className="bg-darkBlue text-lightBlue p-4 rounded-xl shadow-l h-max">
      <h2 className="text-2xl font-bold mb-4">Recent Snips</h2>
      <div className="pt-4 space-y-4">
        {recentSnips.map(snip => (
          <Snip
            key={snip.id}
            language={snip.language}
            code={snip.codeSnippet}
            title={snip.title}
            description={snip.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSnipsCard;