import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutRdvsInput } from "../inputs/PatientsCreateWithoutRdvsInput";
import { PatientsUpdateWithoutRdvsInput } from "../inputs/PatientsUpdateWithoutRdvsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutRdvsInput", {})
export class PatientsUpsertWithoutRdvsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutRdvsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutRdvsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdvsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutRdvsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
