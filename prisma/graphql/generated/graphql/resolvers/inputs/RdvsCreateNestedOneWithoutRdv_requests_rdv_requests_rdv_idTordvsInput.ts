import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsCreateNestedOneWithoutRdv_requests_rdv_requests_rdv_idTordvsInput", {})
export class RdvsCreateNestedOneWithoutRdv_requests_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput | undefined;
}
