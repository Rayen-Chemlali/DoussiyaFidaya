import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsCreateInput } from "../../../inputs/Lab_requestsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsCreateInput, {
    nullable: false
  })
  data!: Lab_requestsCreateInput;
}
