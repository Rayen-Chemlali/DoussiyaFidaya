import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsWhereUniqueInput } from "../../../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;
}
