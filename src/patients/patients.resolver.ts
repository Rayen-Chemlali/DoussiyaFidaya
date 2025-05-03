import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { GraphQLUUID } from 'graphql-scalars';

@Resolver(() => Patient)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

 

  @Query(() => [Patient], { name: 'patients' })
  findAll() {
    return this.patientsService.findAll();
  }

  @Query(() => Patient, { name: 'patient' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.patientsService.findOneById(id);
  }

  @Query(() => [Patient], { name: 'patientsByUserId' })
  findByUserId(@Args('userId', { type: () => GraphQLUUID }) userId: string): Promise<Patient> {
    return this.patientsService.findByUserId(userId);
  }
/*
  @Mutation(() => Patient)
  createPatient(@Args('createPatientInput') createPatientInput: CreatePatientInput) {
    return this.patientsService.create(createPatientInput);
  }

  @Mutation(() => Patient)
  updatePatient(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientsService.update(updatePatientInput.id, updatePatientInput);
  }

  @Mutation(() => Patient)
  removePatient(@Args('id', { type: () => Int }) id: number) {
    return this.patientsService.remove(id);
  }
*/
}
