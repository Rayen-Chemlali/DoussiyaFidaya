import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput", {})
export class RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  update!: RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
