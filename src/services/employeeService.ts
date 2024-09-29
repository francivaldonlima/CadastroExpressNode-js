import { getRepository } from 'typeorm';
import { Employee } from '../models/employee';

export class EmployeeService {
  static async create(data: { name: string; email: string; password: string }) {
    const employeeRepo = getRepository(Employee);

    if (!data.name || !data.email || !data.password) {
      throw new Error('Todos os campos são obrigatórios');
    }

    const employee = employeeRepo.create(data);
    return await employeeRepo.save(employee);
  }

  static async list() {
    const employeeRepo = getRepository(Employee);
    return await employeeRepo.find();
  }

  static async update(id: number, data: { name: string; email: string; password: string }) {
    const employeeRepo = getRepository(Employee);
    
    // Corrigido: uso de findOneBy({ id })
    const employee = await employeeRepo.findOneBy({ id });

    if (!employee) {
      throw new Error('Funcionário não encontrado');
    }

    Object.assign(employee, data);
    return await employeeRepo.save(employee);
  }
//////////////////////////////////////////////////////////////////////////
    static async getOne(id: number) {
        const employeeRepo = getRepository(Employee);
        
        // Corrigido: uso de findOneBy({ id })
        return await employeeRepo.findOneBy({ id });
    }
//////////////////////////////////////////////////////////////////////////
  static async delete(id: number) {
    const employeeRepo = getRepository(Employee);
    
    // Corrigido: uso de findOneBy({ id })
    const employee = await employeeRepo.findOneBy({ id });

    if (!employee) {
      throw new Error('Funcionário não encontrado');
    }

    return await employeeRepo.remove(employee);
  }
}
