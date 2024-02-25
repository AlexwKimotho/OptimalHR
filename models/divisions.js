import mongoose, { Schema } from "mongoose";

const divisionsSchema = new Schema(
    {
        divisionName: String,
        divisionHead: String,
        additionalInfo: String,
        createdOn: String,
    },
    {
        timestamps: true,
    }
);

const Divisions = mongoose.models.Divisions || mongoose.model("Divisions", divisionsSchema);

export default Divisions;
