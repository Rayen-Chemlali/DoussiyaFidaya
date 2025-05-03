import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput", {})
export class RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput | undefined;
}
