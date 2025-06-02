import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.InputType("Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput", {})
export class Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  update!: Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;
}
