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
import { GenericService } from './common/generic.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { RdvRequestsModule } from './rdv-requests/rdv-requests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local','.env'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // Your DB type
      host: 'localhost', // Your DB host
      port: 5432, // Default PostgreSQL port
      username: process.env.DBUsername ?? "postgres", // Database username
      password: process.env.DBpassword ?? "sahbi", // Database password
      // Database name
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // Automatically inclu
      synchronize: true, // Set to `true` for auto-sync in dev (don'tde all entities from all modules use in production)
      logging: true, // Enable logging to view SQL queries
    }),
    InstitutMedicalsModule, AnalysisResultsModule, AuthorizationsModule, CertificatesModule, CliniquesModule, ConsultationsModule, CtScanResultsModule, DoctorsModule, GeneralMedicalRecordsModule, HopitalsModule, LabAttachmentsModule, LabDocumentsModule, LabRequestsModule, LabResultsModule, LaboratorysModule, MedicationsModule, PatientsModule, PharmacysModule, PrescriptionsModule, RdvsModule, UsersModule, XrayResultsModule, CommonModule, RdvRequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
