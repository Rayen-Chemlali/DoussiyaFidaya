import {Controller,Get,Post,Put,Delete,Body,Param,Query,HttpCode,HttpStatus,ParseUUIDPipe,} from '@nestjs/common';
  import { GeneralMedicalRecordsService } from './general-medical-records.service';
  import { CreateGeneralMedicalRecordInput } from './dto/create-general-medical-record.input';
  import { UpdateGeneralMedicalRecordInput } from './dto/update-general-medical-record.input';
  import { GeneralMedicalRecord } from './entities/general-medical-record.entity';
  
  @Controller('general-medical-records')
  export class GeneralMedicalRecordsController {
    constructor(private readonly service: GeneralMedicalRecordsService) {}
  
    @Get()
    async findAll(): Promise<GeneralMedicalRecord[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<GeneralMedicalRecord | null> {
      return this.service.findOne(id);
    }
  
    @Get('/by-patient/:patientId')
    async findByPatientId(
      @Param('patientId', new ParseUUIDPipe()) patientId: string,
    ): Promise<GeneralMedicalRecord[]> {
      return this.service.findByPatientId(patientId);
    }
  
    @Post()
    async create(
      @Body() input: CreateGeneralMedicalRecordInput,
    ): Promise<GeneralMedicalRecord> {
      return this.service.create(input);
    }
  
    @Put(':id')
    async update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() input: UpdateGeneralMedicalRecordInput,
    ): Promise<GeneralMedicalRecord | null> {
      return this.service.updateGeneralMedicalRecord(id, input);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Query('userId', new ParseUUIDPipe()) userId: string,
    ): Promise<void> {
      await this.service.delete(id, userId);
    }
  }
  