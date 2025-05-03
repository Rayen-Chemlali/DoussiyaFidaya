import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsCreateInput } from "../../../inputs/Rdv_requestsCreateInput";
import { Rdv_requestsUpdateInput } from "../../../inputs/Rdv_requestsUpdateInput";
import { Rdv_requestsWhereUniqueInput } from "../../../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateInput;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateInput, {
    nullable: false
  })
  update!: Rdv_requestsUpdateInput;
}
