import mongoose from "mongoose"

import { MONGO_URI } from "../constants/env"


export const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database connected!')
    } catch (error) {
        console.log('Could not connect to database', error)
        process.exit(1)
    }
}
