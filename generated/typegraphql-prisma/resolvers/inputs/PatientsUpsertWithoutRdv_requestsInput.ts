import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutRdv_requestsInput } from "../inputs/PatientsCreateWithoutRdv_requestsInput";
import { PatientsUpdateWithoutRdv_requestsInput } from "../inputs/PatientsUpdateWithoutRdv_requestsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutRdv_requestsInput", {})
export class PatientsUpsertWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutRdv_requestsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutRdv_requestsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdv_requestsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutRdv_requestsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
