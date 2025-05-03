import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsUpdateManyMutationInput } from "../../../inputs/GeneralMedicalRecordsUpdateManyMutationInput";
import { GeneralMedicalRecordsWhereInput } from "../../../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsUpdateManyMutationInput, {
    nullable: false
  })
  data!: GeneralMedicalRecordsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;
}
