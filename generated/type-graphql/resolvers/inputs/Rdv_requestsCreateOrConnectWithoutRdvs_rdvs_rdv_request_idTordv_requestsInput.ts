import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput", {})
export class Rdv_requestsCreateOrConnectWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput;
}
