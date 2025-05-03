import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput", {})
export class Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput;
}
