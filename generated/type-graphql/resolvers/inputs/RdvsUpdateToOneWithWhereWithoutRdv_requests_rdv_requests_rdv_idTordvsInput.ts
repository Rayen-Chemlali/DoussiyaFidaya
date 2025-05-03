import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput", {})
export class RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  data!: RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput;
}
