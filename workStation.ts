import http, { ServerResponse } from "http";
const food = [
  "Tea",
  "Bread",
  "Beans",
  "Rice",
  "Amala",
  "Ewedu",
  "Edikang-Ikong",
];

const data: any = [];

Array.from({ length: 7 }, () => {
  let numb = Math.floor(Math.random() * food.length);
  let cost = Math.floor(Math.random() * 1000);
  data.push({ item: food[numb], cost });
});

console.log(data);
const port: number = 4000;

const server = http.createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") {
        res.writeHead((res.statusCode = 200), {
            "content-type": "application/json"
        })
      res.write("We are good..!");
      res.write(JSON.stringify(data));
      res.end();
    } else {
    }
  }
);

server.on("Connection", () => {
  console.log("A user connected");
});

server.listen(port, () => {
  console.log("");
  console.log("Server is now live....");
});
