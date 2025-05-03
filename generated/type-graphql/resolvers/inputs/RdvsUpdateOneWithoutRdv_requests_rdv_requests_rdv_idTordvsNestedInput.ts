import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput } from "../inputs/RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput", {})
export class RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  upsert?: RdvsUpsertWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;

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

  @TypeGraphQL.Field(_type => RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  update?: RdvsUpdateToOneWithWhereWithoutRdv_requests_rdv_requests_rdv_idTordvsInput | undefined;
}
