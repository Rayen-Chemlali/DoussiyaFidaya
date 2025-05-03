import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutLab_requestsInput } from "../inputs/PatientsCreateWithoutLab_requestsInput";
import { PatientsUpdateWithoutLab_requestsInput } from "../inputs/PatientsUpdateWithoutLab_requestsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutLab_requestsInput", {})
export class PatientsUpsertWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
