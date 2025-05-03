import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsCreateInput } from "../../../inputs/GeneralMedicalRecordsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateInput, {
    nullable: false
  })
  data!: GeneralMedicalRecordsCreateInput;
}
