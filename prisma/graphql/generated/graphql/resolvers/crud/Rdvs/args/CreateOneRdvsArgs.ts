import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsCreateInput } from "../../../inputs/RdvsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsCreateInput, {
    nullable: false
  })
  data!: RdvsCreateInput;
}
