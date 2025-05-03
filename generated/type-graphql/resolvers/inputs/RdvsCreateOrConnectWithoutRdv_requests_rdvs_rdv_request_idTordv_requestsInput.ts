import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput", {})
export class RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput;
}
