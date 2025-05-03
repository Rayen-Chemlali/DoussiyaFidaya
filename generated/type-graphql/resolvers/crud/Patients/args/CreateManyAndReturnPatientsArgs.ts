import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsCreateManyInput } from "../../../inputs/PatientsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPatientsArgs {
  @TypeGraphQL.Field(_type => [PatientsCreateManyInput], {
    nullable: false
  })
  data!: PatientsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
