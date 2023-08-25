import mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/index.js";

( async () => {
    try {
        await mongoose.connect("mongodb+srv://manish:q1e2r3s4@cluster0.juwqqxw.mongodb.net/TODOAPPICATION?retryWrites=true&w=majority")
        console.log("DB connection established !")

        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        const onlistening = () => {
            console.log(`Listening on port ${5000}`)
        }

        app.listen(config.PORT, onlistening)

    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
})()
