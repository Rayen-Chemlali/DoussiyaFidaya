import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutMedicalsModule } from './institut-medicals/institut-medicals.module';
import { XrayResultsModule } from './xray-results/xray-results.module';
import { UsersModule } from './users/users.module';
import { RdvsModule } from './rdvs/rdvs.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { PharmacysModule } from './pharmacys/pharmacys.module';
import { PatientsModule } from './patients/patients.module';
import { MedicationsModule } from './medications/medications.module';
import { LaboratorysModule } from './laboratorys/laboratorys.module';
import { LabResultsModule } from './lab-results/lab-results.module';
import { LabRequestsModule } from './lab-requests/lab-requests.module';
import { LabDocumentsModule } from './lab-documents/lab-documents.module';
import { LabAttachmentsModule } from './lab-attachments/lab-attachments.module';
import { AnalysisResultsModule } from './analysis-results/analysis-results.module';
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { CertificatesModule } from './certificates/certificates.module';
import { CliniquesModule } from './cliniques/cliniques.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { CtScanResultsModule } from './ct-scan-results/ct-scan-results.module';
import { DoctorsModule } from './doctors/doctors.module';
import { GeneralMedicalRecordsModule } from './general-medical-records/general-medical-records.module';
import { HopitalsModule } from './hopitals/hopitals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { RdvRequestsModule } from './rdv-requests/rdv-requests.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local','.env'],
    }),
    TypeOrmModule.forRoot({
    type: 'postgres', // Your DB type
    host: 'localhost', // Your DB host
    port: 5432, // Default PostgreSQL port
    username: process.env.DBUsername ?? "postgres", // Database username
    password: process.env.DBpassword ?? "sahbi", // Database password
    database: 'medical-system', // Database name
    entities: [__dirname + '/entities/*.entity{.ts,.js}'], // Automatically include all entities
    synchronize: true, // Set to `true` for auto-sync in dev (don't use in production)
    logging: true, // Enable logging to view SQL queries
  }),
    InstitutMedicalsModule, AnalysisResultsModule, AuthorizationsModule, CertificatesModule, CliniquesModule, ConsultationsModule, CtScanResultsModule, DoctorsModule, GeneralMedicalRecordsModule, HopitalsModule, LabAttachmentsModule, LabDocumentsModule, LabRequestsModule, LabResultsModule, LaboratorysModule, MedicationsModule, PatientsModule, PharmacysModule, PrescriptionsModule, RdvsModule, UsersModule, XrayResultsModule, CommonModule, RdvRequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
