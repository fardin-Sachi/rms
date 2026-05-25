export default interface CreateEmployeeDto {
    name: string;
    dob?: Date;
    contact: string;
    email?: string;
    sex: boolean;
    joiningDate: Date;
    endDate?: Date;
    nidNumber?: string;
    imageUrl?: string;
    //Usually an employee who just joined won't be on vacation.
    onVacation?: boolean;
    activeStatus: boolean;
}