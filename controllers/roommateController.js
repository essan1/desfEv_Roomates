
import {
  addRoomateQuery,
  getRoommatesQuery,
} from "../queries/roommatesQueries.js";
import path from "path";
const __dirname = import.meta.dirname;


const home = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
};

const addRoommate = async (req, res) => {
    try {
        await addRoomateQuery();
        res.send('Roommate added')
    } catch (error) {
        console.log(error);
        
    }
}

const getRoomates = async (req, res) => {
    try {
        const roommatesJson = await getRoommatesQuery();
        res.json(roommatesJson)
    } catch (error) {
        console.log(error);
        
    }
}

export { home, addRoommate, getRoomates }