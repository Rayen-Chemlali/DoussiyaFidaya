import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsCreateInput } from "../../../inputs/GeneralMedicalRecordsCreateInput";
import { GeneralMedicalRecordsUpdateInput } from "../../../inputs/GeneralMedicalRecordsUpdateInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../../../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: false
  })
  where!: GeneralMedicalRecordsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateInput, {
    nullable: false
  })
  create!: GeneralMedicalRecordsCreateInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateInput, {
    nullable: false
  })
  update!: GeneralMedicalRecordsUpdateInput;
}
