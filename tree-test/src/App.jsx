import asciiArt from "./data/asciiArt";
import { useEffect, useState } from "react";

const {
  tree,
  trunk,
  santaHAT,
  santaRED,
  santaWHITE,
  santaFACE,
  santaDRESS,
  ornaments,
  colors,
} = asciiArt;

const App = () => {
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [ornamentColors, setOrnamentColors] = useState(
    ornaments.map(() => getRandomColor())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setOrnamentColors(ornaments.map(() => getRandomColor()));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full h-full gap-2">
      <div className="flex">
        <div className="relative">
          {ornaments.map((item, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: item.top,
                left: item.left,
                backgroundColor: ornamentColors[index],
              }}
            />
          ))}

          <pre className="text-[#4CAF50] text-xl leading-tight font-mono">
            {tree.join("\n")}
          </pre>
          <pre className="text-[#8D6E63] text-xl leading-tight font-mono">
            {trunk.join("\n")}
          </pre>
        </div>

        <div className="flex flex-col">
          <pre className="text-white text-xl font-mono">
            {santaHAT.join("\n")}
          </pre>
          <pre className="text-red-500 text-xl font-mono">
            {santaRED.join("\n")}
          </pre>
          <pre className="text-white text-xl font-mono">
            {santaWHITE.join("\n")}
          </pre>
          <pre className="text-[#fbceb1] text-xl font-mono">
            {santaFACE.join("\n")}
          </pre>
          <pre className="text-red-500 text-xl font-mono">
            {santaDRESS.join("\n")}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
