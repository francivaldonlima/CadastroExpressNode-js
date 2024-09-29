import { Router } from 'express';
import { EmployeeController } from '../controllers/employeeController';

const router = Router();



router.post('/employees', EmployeeController.create);
router.get('/employees', EmployeeController.list);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);
router.get('/employees/:id', EmployeeController.getOne);


export default router;
