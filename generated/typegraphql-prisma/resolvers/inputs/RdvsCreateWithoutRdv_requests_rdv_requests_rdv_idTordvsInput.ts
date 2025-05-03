import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedOneWithoutRdvsInput } from "../inputs/ConsultationsCreateNestedOneWithoutRdvsInput";
import { DoctorsCreateNestedOneWithoutRdvsInput } from "../inputs/DoctorsCreateNestedOneWithoutRdvsInput";
import { PatientsCreateNestedOneWithoutRdvsInput } from "../inputs/PatientsCreateNestedOneWithoutRdvsInput";
import { Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput } from "../inputs/Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput";

@TypeGraphQL.InputType("RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput", {})
export class RdvsCreateWithoutRdv_requests_rdv_requests_rdv_idTordvsInput {
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

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedOneWithoutRdvsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedOneWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutRdvsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutRdvsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput, {
    nullable: true
  })
  rdv_requests_rdvs_rdv_request_idTordv_requests?: Rdv_requestsCreateNestedOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutRdvsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutRdvsInput | undefined;
}
