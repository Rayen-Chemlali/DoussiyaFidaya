import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsUpdateInput } from "../../../inputs/GeneralMedicalRecordsUpdateInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../../../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateInput, {
    nullable: false
  })
  data!: GeneralMedicalRecordsUpdateInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: false
  })
  where!: GeneralMedicalRecordsWhereUniqueInput;
}
