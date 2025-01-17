import mongoose, { Schema } from "mongoose";

const departmentsSchema = new Schema(
    {
        departmentName: String,
        departmentHead: String,  
    },
    {
        timestamps: true,
    }
);

const Departments = mongoose.models.Departments || mongoose.model("Departments", departmentsSchema);

export default Departments;
