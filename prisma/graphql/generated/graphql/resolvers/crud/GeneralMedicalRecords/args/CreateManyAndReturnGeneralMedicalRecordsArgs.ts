import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsCreateManyInput } from "../../../inputs/GeneralMedicalRecordsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsCreateManyInput], {
    nullable: false
  })
  data!: GeneralMedicalRecordsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
