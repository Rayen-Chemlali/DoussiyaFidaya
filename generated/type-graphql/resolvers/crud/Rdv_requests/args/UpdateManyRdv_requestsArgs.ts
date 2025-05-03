import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsUpdateManyMutationInput } from "../../../inputs/Rdv_requestsUpdateManyMutationInput";
import { Rdv_requestsWhereInput } from "../../../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Rdv_requestsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;
}
