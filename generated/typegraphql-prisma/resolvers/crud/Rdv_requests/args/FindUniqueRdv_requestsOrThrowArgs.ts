import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsWhereUniqueInput } from "../../../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRdv_requestsOrThrowArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;
}
