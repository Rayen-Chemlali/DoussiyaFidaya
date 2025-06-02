import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs } from "./args/CreateManyAndReturnPatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs";
import { CreateManyAndReturnPatientsUsersArgs } from "./args/CreateManyAndReturnPatientsUsersArgs";
import { GeneralMedicalRecords } from "../../models/GeneralMedicalRecords";
import { Users } from "../../models/Users";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnPatients", {})
export class CreateManyAndReturnPatients {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cin!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: false
  })
  gender!: "Male" | "Female";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  general_medical_record_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  users!: Users | null;
  GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords!: GeneralMedicalRecords | null;

  @TypeGraphQL.Field(_type => Users, {
    name: "users",
    nullable: true
  })
  getUsers(@TypeGraphQL.Root() root: CreateManyAndReturnPatients, @TypeGraphQL.Args() args: CreateManyAndReturnPatientsUsersArgs): Users | null {
    return root.users;
  }

  @TypeGraphQL.Field(_type => GeneralMedicalRecords, {
    name: "GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords",
    nullable: true
  })
  getGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords(@TypeGraphQL.Root() root: CreateManyAndReturnPatients, @TypeGraphQL.Args() args: CreateManyAndReturnPatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs): GeneralMedicalRecords | null {
    return root.GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords;
  }
}
