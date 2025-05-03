import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsWhereInput } from "../../../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class RdvsRdv_requests_rdvs_rdv_request_idTordv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;
}
