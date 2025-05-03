import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateallergiesInput } from "../inputs/GeneralMedicalRecordsCreateallergiesInput";
import { PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput } from "../inputs/PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput";
import { PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput } from "../inputs/PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateInput", {})
export class GeneralMedicalRecordsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateallergiesInput, {
    nullable: true
  })
  allergies?: GeneralMedicalRecordsCreateallergiesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bloodType?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight?: number | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput, {
    nullable: false
  })
  patients_GeneralMedicalRecords_patient_idTopatients!: PatientsCreateNestedOneWithoutGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsInput;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput, {
    nullable: true
  })
  patients_patients_general_medical_record_idToGeneralMedicalRecords?: PatientsCreateNestedOneWithoutGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsInput | undefined;
}
