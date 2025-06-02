import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesUpdateInput } from "../../../inputs/LaboratoriesUpdateInput";
import { LaboratoriesWhereUniqueInput } from "../../../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesUpdateInput, {
    nullable: false
  })
  data!: LaboratoriesUpdateInput;

  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: false
  })
  where!: LaboratoriesWhereUniqueInput;
}
