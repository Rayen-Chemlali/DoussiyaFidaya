import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsUpdateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsUpdateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.InputType("Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput", {})
export class Rdv_requestsUpsertWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  update!: Rdv_requestsUpdateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;
}
