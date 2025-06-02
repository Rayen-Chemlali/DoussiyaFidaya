import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput", {})
export class RdvsUpdateToOneWithWhereWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  data!: RdvsUpdateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput;
}
