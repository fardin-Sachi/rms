import type IRepository from "../../shared/interfaces/repository.interface.js";
import type {EmployeeDto} from "./dtos/employee.dtos.js";
import type CreateEmployeeDto from "./dtos/createEmployee.dto.js";
import type UpdateEmployeeDto from "./dtos/updateEmployee.dto.js";

class EmployeeRepository implements IRepository<EmployeeDto, CreateEmployeeDto, UpdateEmployeeDto, number>{

    async get(_id: number): Promise<EmployeeDto | null> {
        return null;
    }

    async getAll(): Promise<EmployeeDto[]> {
        return [];
    }

    async create(pMutable: CreateEmployeeDto): Promise<EmployeeDto> {
        return {
            id: 1,
            ...pMutable,
            onVacation: pMutable.onVacation ?? true,
        }
    }

    async createMany(_pMutableList: CreateEmployeeDto[]): Promise<EmployeeDto[]> {
        return [];
    }

    async update(pMutable: UpdateEmployeeDto): Promise<EmployeeDto> {
        return {
            id: pMutable.id,
            name: pMutable.name ?? "Employee",
            contact: pMutable.contact ?? "",
            sex: true,
            joiningDate: new Date(),
            onVacation: false,
            activeStatus: true
        };
    }

    async updateMany(_pMutableList: UpdateEmployeeDto[]): Promise<EmployeeDto[]> {
        return [];
    }

    async delete(id: number): Promise<number> {
        return id;
    }

    async deleteMany(ids: number[]): Promise<number[]> {
        return ids;
    }

}

export default EmployeeRepository;