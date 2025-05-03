import { PatientsService } from './patients.service';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { Patient } from './entities/patient.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientsService.findOneById(id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string): Promise<Patient> {
    return this.patientsService.findByUserId(userId);
  }

  @Post()
  async create(@Body() createPatientInput: CreatePatientInput): Promise<Patient> {
    return this.patientsService.createPatient(createPatientInput);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatientInput: UpdatePatientInput,
  ): Promise<Patient | null> {
    return this.patientsService.updatePatient(id, updatePatientInput);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ success: boolean }> {
    await this.patientsService.deletePatient(id);
    return { success: true };
  }
}