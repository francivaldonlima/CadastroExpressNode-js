import { Request, Response } from 'express';
import { EmployeeService } from '../services/employeeService';

// export class EmployeeController {

//     ///////////////////////////////////////////////////////////////////////
//     ///////////////// CRIAR USUARIO ///////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////
//     static async create(req: Request, res: Response) {
//         const { name, email, password } = req.body;
//         try {
//             const employee = await EmployeeService.create({ name, email, password });
//             res.status(201).json(employee);
//         } catch (error) {
//             res.status(400).json({ error: (error as Error).message });
//         }
//     }

//     ///////////////////////////////////////////////////////////////////////
//     ///////////////////// LISTAR USUARIOS /////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////

//     static async list(req: Request, res: Response) {
//         const employees = await EmployeeService.list();
//         res.json(employees);
//     }

//     ///////////////////////////////////////////////////////////////////////
//     ///////////////////// ATUALIZAR USUARIOS //////////////////////////////
//     ///////////////////////////////////////////////////////////////////////

//     static async update(req: Request, res: Response) {
//         const { id } = req.params;
//         const { name, email, password } = req.body;
//         try {
//             const updatedEmployee = await EmployeeService.update(Number(id), { name, email, password });
//             res.json(updatedEmployee);
//         } catch (error) {
//             res.status(400).json({ error: (error as Error).message });
//         }
//     }

//     ///////////////////////////////////////////////////////////////////////
//     /////////////////////// DELETAR USUARIOS //////////////////////////////
//     ///////////////////////////////////////////////////////////////////////

//     static async delete(req: Request, res: Response) {
//         const { id } = req.params;
//         try {
//             await EmployeeService.delete(Number(id));
//             res.status(204).send();
//         } catch (error) {
//             res.status(400).json({ error: (error as Error).message });
//         }
//     }

//     ///////////////////////////////////////////////////////////////////////
//     //////////////////// PEGUAR UM USUARIO ////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////

//     static async getOne(req: Request, res: Response): Promise<Response> {
//         const { id } = req.params;
//         try {
//             const employee = await EmployeeService.getOne(Number(id));
//             if (!employee) {
//                 return res.status(404).json({ error: 'Funcionário não encontrado' });
//             }
//             return res.json(employee);
//         } catch (error) {
//             return res.status(500).json({ error: (error as Error).message });
//         }
//     }









// }





export class EmployeeController {

    static create = async (req: Request, res: Response) => {

        const { name, email, password } = req.body;
        try {
            const employee = await EmployeeService.create({ name, email, password });
            res.status(201).json(employee);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    };



    static list = async (req: Request, res: Response) => {

        const employees = await EmployeeService.list();
        res.json(employees);

    };



    static update = async (req: Request, res: Response) => {

        const { id } = req.params;
        const { name, email, password } = req.body;
        try {
            const updatedEmployee = await EmployeeService.update(Number(id), { name, email, password });
            res.json(updatedEmployee);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    };



    static delete = async (req: Request, res: Response) => {

        const { id } = req.params;
        try {
            await EmployeeService.delete(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    };



    static getOne = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params;
        try {
            const employee = await EmployeeService.getOne(Number(id));
            if (!employee) {
                res.status(404).json({ error: 'Funcionário não encontrado' });
            }
            res.json(employee);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }

    };

}










