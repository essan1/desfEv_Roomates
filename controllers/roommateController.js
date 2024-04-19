
import { addRoomateQuery } from "../queries/roommatesQueries.js"
import path from "path";
const __dirname = import.meta.dirname;


const home = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
};

const addRoommate = async (req, res) => {
    try {
        const res = await addRoomateQuery();
        res.json(res)
    } catch (error) {
        console.log(error);
        
    }
}

export { home, addRoommate }