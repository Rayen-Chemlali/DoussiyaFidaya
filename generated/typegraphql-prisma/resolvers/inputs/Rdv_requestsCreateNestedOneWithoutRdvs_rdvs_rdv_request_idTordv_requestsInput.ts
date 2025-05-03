import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput", {})
export class Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput | undefined;
}
