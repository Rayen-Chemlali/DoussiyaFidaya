import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput", {})
export class Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput {
  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  upsert?: Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  disconnect?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  delete?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  update?: Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;
}
