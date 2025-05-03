import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsCreateInput } from "../../../inputs/RdvsCreateInput";
import { RdvsUpdateInput } from "../../../inputs/RdvsUpdateInput";
import { RdvsWhereUniqueInput } from "../../../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateInput, {
    nullable: false
  })
  create!: RdvsCreateInput;

  @TypeGraphQL.Field(_type => RdvsUpdateInput, {
    nullable: false
  })
  update!: RdvsUpdateInput;
}
