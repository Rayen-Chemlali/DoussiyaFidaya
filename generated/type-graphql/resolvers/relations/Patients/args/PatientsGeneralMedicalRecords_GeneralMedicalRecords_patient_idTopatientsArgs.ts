import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsWhereInput } from "../../../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.ArgsType()
export class PatientsGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;
}
