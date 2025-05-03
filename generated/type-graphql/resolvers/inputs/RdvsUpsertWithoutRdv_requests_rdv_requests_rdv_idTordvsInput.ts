import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput", {})
export class RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  update!: RdvsUpdateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
