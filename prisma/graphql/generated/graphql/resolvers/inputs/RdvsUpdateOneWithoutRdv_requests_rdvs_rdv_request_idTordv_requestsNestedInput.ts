import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput", {})
export class RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  upsert?: RdvsUpsertWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  disconnect?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  delete?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  update?: RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;
}
