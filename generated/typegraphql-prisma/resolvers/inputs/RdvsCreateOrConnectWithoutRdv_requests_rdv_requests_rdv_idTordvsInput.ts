import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput", {})
export class RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: false
  })
  where!: RdvsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput;
}
