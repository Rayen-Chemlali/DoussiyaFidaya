import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GeneralMedicalRecordsService } from './general-medical-records.service';
import { GeneralMedicalRecord } from './entities/general-medical-record.entity';
import { CreateGeneralMedicalRecordInput } from './dto/create-general-medical-record.input';
import { UpdateGeneralMedicalRecordInput } from './dto/update-general-medical-record.input';

@Resolver(() => GeneralMedicalRecord)
export class GeneralMedicalRecordsResolver {
  constructor(private readonly generalMedicalRecordsService: GeneralMedicalRecordsService) {}

  @Mutation(() => GeneralMedicalRecord)
  createGeneralMedicalRecord(@Args('createGeneralMedicalRecordInput') createGeneralMedicalRecordInput: CreateGeneralMedicalRecordInput) {
    return this.generalMedicalRecordsService.create(createGeneralMedicalRecordInput);
  }

  @Query(() => [GeneralMedicalRecord], { name: 'generalMedicalRecords' })
  findAll() {
    return this.generalMedicalRecordsService.findAll();
  }

  @Query(() => GeneralMedicalRecord, { name: 'generalMedicalRecord' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.generalMedicalRecordsService.findOne(id);
  }

  @Mutation(() => GeneralMedicalRecord)
  updateGeneralMedicalRecord(@Args('updateGeneralMedicalRecordInput') updateGeneralMedicalRecordInput: UpdateGeneralMedicalRecordInput) {
    return this.generalMedicalRecordsService.update(updateGeneralMedicalRecordInput.id, updateGeneralMedicalRecordInput);
  }

  @Mutation(() => GeneralMedicalRecord)
  removeGeneralMedicalRecord(@Args('id', { type: () => Int }) id: number) {
    return this.generalMedicalRecordsService.remove(id);
  }
}
