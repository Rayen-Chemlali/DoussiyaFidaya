import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsWhereUniqueInput } from "../../../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRdvsOrThrowArgs {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;
}
