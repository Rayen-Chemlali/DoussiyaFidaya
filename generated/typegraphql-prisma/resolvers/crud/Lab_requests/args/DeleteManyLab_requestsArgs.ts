import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsWhereInput } from "../../../inputs/Lab_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;
}
