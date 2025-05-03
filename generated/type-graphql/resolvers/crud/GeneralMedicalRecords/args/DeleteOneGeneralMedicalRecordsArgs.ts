import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsWhereUniqueInput } from "../../../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: false
  })
  where!: GeneralMedicalRecordsWhereUniqueInput;
}
