import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutRdv_requestsInput } from "../inputs/DoctorsCreateNestedOneWithoutRdv_requestsInput";
import { PatientsCreateNestedOneWithoutRdv_requestsInput } from "../inputs/PatientsCreateNestedOneWithoutRdv_requestsInput";
import { RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput";

@TypeGraphQL.InputType("Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput", {})
export class Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Motif!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Status!: string;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutRdv_requestsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutRdv_requestsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutRdv_requestsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  rdvs_rdvs_rdv_request_idTordv_requests?: RdvsCreateNestedOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput | undefined;
}
