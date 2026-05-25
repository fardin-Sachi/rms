import {z} from "zod";
import {createEmployeeSchema} from "./createEmployee.schema.js";

export const createEmployeeArraySchema = z.array(createEmployeeSchema);