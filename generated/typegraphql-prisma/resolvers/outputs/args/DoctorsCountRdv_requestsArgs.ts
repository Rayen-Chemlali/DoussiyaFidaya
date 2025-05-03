import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsWhereInput } from "../../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorsCountRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;
}
