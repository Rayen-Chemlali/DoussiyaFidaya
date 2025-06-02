import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";

@TypeGraphQL.ArgsType()
export class Rdv_requestsRdvs_rdv_requests_rdv_idTordvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
