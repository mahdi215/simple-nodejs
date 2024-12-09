import express, { Request, Response, response } from "express";
import path from "path";

const PORT = 3000;

function init() {
  const app = express();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  app.use((err: Error, req: Request, res: Response) => {
    console.error(err);
    res.status(500).json({
      message: "Success fetch user",
	    data: {
            "id": 1,
		        "name": "Mahdi",
		        "username": "SM14",
		        "email": "mahdi14@mail.com"
      }
      
    });
  });

  // Melayani file statis dari direktori "public"
app.use(express.static(path.join(__dirname, 'public')));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
