import mongoose, { Schema } from "mongoose";

const organizationsSchema = new Schema(
    {
        companyName: String,
        address: String,
        missionStatement: String,
        visionStatement: String,
        awards: String,

    },
    {
        timestamps: true,
    }
);

const Organizations = mongoose.models.Organizations || mongoose.model("Organizations", organizationsSchema);

export default Organizations;
