import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
