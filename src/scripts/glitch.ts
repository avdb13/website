const random = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));

let logo = document.querySelector("#logo")!;
let text = logo.textContent;
logo.textContent = "";

let shards = (logo as HTMLElement).dataset["shards"]!;

let wrapper = document.createElement("div");
wrapper.className = "glitch";
(wrapper as HTMLElement).style.setProperty("--slice-count", shards);

for (let i = 0; i <= Number(shards); i++) {
  let shard = document.createElement("span");
  shard.textContent = text;

  shard.style.setProperty("--i", `${i + 1}`);

  if (i !== Number(shards)) {
    shard.style.animationDelay = `${800 + random(100, 300)}ms`;
  }
  wrapper.append(shard);
}

logo.appendChild(wrapper);

// Cross Bars
// let bars = document.createElement("div");
// bars.className = "bars";
// for (let i = 0; i < 5; i++) {
//   let bar = document.createElement("div");
//   bar.className = "bar";
//   bars.append(bar);
// }
// logo.append(bars);
