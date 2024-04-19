/* import fs from "fs";
import { v4 as uuidv4 } from "uuid";
 */
import path from "path";
const __dirname = import.meta.dirname;


const home = async (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
};

export { home }