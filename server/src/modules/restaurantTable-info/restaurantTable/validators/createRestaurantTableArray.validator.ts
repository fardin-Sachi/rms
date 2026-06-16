import { z } from 'zod';
import {createRestaurantTableValidator} from "./createRestaurantTable.validator.js";

export const createRestaurantTableArrayValidator = z.array(createRestaurantTableValidator);
