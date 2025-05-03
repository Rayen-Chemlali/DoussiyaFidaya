import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesCreateManyInput } from "../../../inputs/LaboratoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLaboratoriesArgs {
  @TypeGraphQL.Field(_type => [LaboratoriesCreateManyInput], {
    nullable: false
  })
  data!: LaboratoriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
