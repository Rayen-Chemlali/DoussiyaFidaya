import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsUpdateInput } from "../../../inputs/RdvsUpdateInput";
import { RdvsWhereUniqueInput } from "../../../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsUpdateInput, {
    nullable: false
  })
  data!: RdvsUpdateInput;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;
}
