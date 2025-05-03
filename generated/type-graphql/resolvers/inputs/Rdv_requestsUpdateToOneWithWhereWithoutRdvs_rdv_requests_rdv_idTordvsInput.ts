import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput", {})
export class Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: false
  })
  data!: Rdv_requestsUpdateWithoutRdvs_rdv_requests_rdv_idTordvsInput;
}
