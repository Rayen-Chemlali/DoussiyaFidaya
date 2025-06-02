import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsCreateInput } from "../../../inputs/Rdv_requestsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsCreateInput, {
    nullable: false
  })
  data!: Rdv_requestsCreateInput;
}
