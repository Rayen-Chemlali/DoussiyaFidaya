import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsUpdateInput } from "../../../inputs/Rdv_requestsUpdateInput";
import { Rdv_requestsWhereUniqueInput } from "../../../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsUpdateInput, {
    nullable: false
  })
  data!: Rdv_requestsUpdateInput;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;
}
