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
import { resolvers } from '../generated/typegraphql-prisma'; // './node_modules/@generated/typegraphql-prisma'
import { buildSchemaSync } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local','.env'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema: buildSchemaSync({
        resolvers,
        validate: false,
        emitSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }as any),
      playground: true,
      context: () => ({ prisma }), // Make Prisma available in resolvers
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
